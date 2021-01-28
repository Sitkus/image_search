import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { usePhotos, useKeywords } from '../../context';

import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

function Header() {
  const classes = useStyles();

  const { authKey, setIsLoading, setPhotos, url } = usePhotos();
  const { savedKeywords, setSavedKeywords } = useKeywords();

  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputData, setInputData] = useState('');
  const [errorMessage, setErrorMessage] = useState('Please fill in the search input field');

  const keywordsMaxLimit = 5;
  const inputMaxLimit = 15;
  const inputMinLimit = 2;

  useEffect(() => {
    fetchPhotos(url);
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
    if (inputData.trim().length <= inputMaxLimit && inputData.trim().length >= inputMinLimit) {
      removeError();

      saveKeyword();
    } else {
      showError(`To save a keyword, it's length has to be between ${inputMinLimit} - ${inputMaxLimit} symbols`);
    }
  };

  const saveKeyword = () => {
    const keywordAlreadyExists = savedKeywords.indexOf(inputData.trim());

    if (keywordAlreadyExists === -1) {
      const newSavedKeywords = [...savedKeywords, inputData.trim()];

      setSavedKeywords(newSavedKeywords);
    } else {
      showError(`You have already saved keyword: ${inputData.trim()}`);
    }
  };

  const checkIfInputIsNotEmpty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputData.trim()) {
      setIsLoading(true);

      fetchPhotos(`https://api.unsplash.com/search/photos?query=${inputData}&per_page=30`);
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
        <SearchField collectInputData={collectInputData} type="text" name="search" placeholder="Search for images" />
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
