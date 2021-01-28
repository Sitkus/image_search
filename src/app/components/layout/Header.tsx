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
  }, []);

  const collectInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const checkKeywordsLimitAndInputLength = () => {
    if (savedKeywords.length >= 0 && savedKeywords.length < keywordsMaxLimit) {
      if (inputData.trim().length <= inputMaxLimit && inputData.trim().length >= inputMinLimit) {
        saveKeyword();
      } else {
        showError(`To save a keyword, it's length has to be between ${inputMinLimit} - ${inputMaxLimit} symbols`);
      }
    } else {
      showError(`Maximum keywords to save is ${keywordsMaxLimit}, please delete some to add new`);
    }
  };

  const saveKeyword = () => {
    const newSavedKeywords = [...savedKeywords, inputData.trim()];

    setSavedKeywords(newSavedKeywords);
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
          <Button btnType="button" eventFunction={checkKeywordsLimitAndInputLength}>
            Save
          </Button>
        ) : null}
      </form>
      {savedKeywords ? (
        <article className={classes.keywords}>
          {savedKeywords.map(keyword => (
            <Button btnType="button" className={classes.keyword}>
              {keyword}
            </Button>
          ))}
        </article>
      ) : null}
      {inputIsEmpty ? <p className={classes.error}>{errorMessage}</p> : null}
    </header>
  );
}

export default Header;
