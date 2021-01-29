import { FormEvent, ChangeEvent, useEffect, SetStateAction, Dispatch } from 'react';
import { usePhotos, useKeywords } from '../../context';

import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

interface Props {
  inputIsEmpty: boolean;
  setInputIsEmpty: Dispatch<SetStateAction<boolean>>;
  inputData: string;
  setInputData: Dispatch<SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  saveKeywordToLocalStorage: (updatedKeywords: string[]) => void;
}

function Header({
  inputIsEmpty,
  setInputIsEmpty,
  inputData,
  setInputData,
  errorMessage,
  setErrorMessage,
  saveKeywordToLocalStorage
}: Props) {
  const classes = useStyles();

  const { authKey, setIsLoading, setPhotos, url, setUrl } = usePhotos();
  const { savedKeywords, setSavedKeywords } = useKeywords();

  const keywordsMaxLimit = 5;
  const inputMaxLength = 15;
  const inputMinLength = 2;

  useEffect(() => {
    fetchPhotos(url);

    const keywordsFromLocalStorage: string | null = localStorage.getItem('keywords');

    if (keywordsFromLocalStorage) {
      setSavedKeywords(JSON.parse(keywordsFromLocalStorage));
    }
  }, [url]);

  const collectInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const checkSavedKeywordsLimit = () => {
    if (savedKeywords.length >= 0 && savedKeywords.length < keywordsMaxLimit) {
      checkInputLength();
    } else {
      showError(`Maximum keywords to save is ${keywordsMaxLimit}, please delete some to add new`);
    }
  };

  const checkInputLength = () => {
    const keyword = inputData.trim();

    if (keyword.length <= inputMaxLength && keyword.length >= inputMinLength) {
      removeError();

      saveKeyword(keyword);
    } else {
      showError(`To save a keyword, it's length has to be between ${inputMinLength} - ${inputMaxLength} symbols`);
    }
  };

  const saveKeyword = (keyword: string) => {
    const keywordAlreadyExists = savedKeywords.indexOf(keyword);

    if (keywordAlreadyExists === -1) {
      const newSavedKeywords = [...savedKeywords, keyword];

      saveKeywordToLocalStorage(newSavedKeywords);
      setSavedKeywords(newSavedKeywords);
    } else {
      showError(`You have already saved keyword: ${keyword}`);
    }
  };

  const checkIfInputIsNotEmpty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputData.trim()) {
      setIsLoading(true);

      setUrl(`https://api.unsplash.com/search/photos?query=${inputData}&per_page=30`);
    } else {
      showError();
    }
  };

  const fetchPhotos = async (newUrl: string) => {
    removeError();

    const response = await fetch(newUrl, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${authKey}`
      }
    });
    const fetchedPhotos = await response.json();

    if (fetchedPhotos.results) {
      setPhotos(fetchedPhotos.results);
    } else {
      setPhotos(fetchedPhotos);
    }

    setIsLoading(false);
  };

  const showError = (msg: string = 'Please fill in the search input field') => {
    setErrorMessage(msg);

    setInputIsEmpty(true);
  };

  const removeError = () => {
    setInputIsEmpty(false);
  };

  return (
    <header className={classes.header}>
      <form className={classes.form} onSubmit={checkIfInputIsNotEmpty}>
        <SearchField
          value={inputData}
          changeEvent={collectInputData}
          type="text"
          name="search"
          placeholder="Search for images"
        />
        <Button btnType="submit">Search</Button>
        {inputData ? (
          <Button btnType="button" clickEvent={checkSavedKeywordsLimit}>
            Save
          </Button>
        ) : null}
      </form>
      {inputIsEmpty ? <p className={classes.error}>{errorMessage}</p> : null}
    </header>
  );
}

export default Header;
