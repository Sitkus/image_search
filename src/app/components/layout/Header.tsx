import { FormEvent, ChangeEvent, useEffect } from 'react';
import { usePhotos, useKeywords, useSearch, useError } from '../../context';

import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

function Header() {
  const classes = useStyles();

  const { inputData, setInputData } = useSearch();
  const { showError, removeError } = useError();
  const { setIsLoading, url, setUrl, fetchPhotos } = usePhotos();
  const { savedKeywords, setSavedKeywords, saveKeyword } = useKeywords();

  const keywordsMaxLimit = 5;
  const inputMaxLength = 15;
  const inputMinLength = 2;

  useEffect(() => {
    setIsLoading(true);
    fetchPhotos(url);

    const keywordsFromLocalStorage: string | null = localStorage.getItem('keywords');

    if (keywordsFromLocalStorage) {
      setSavedKeywords(JSON.parse(keywordsFromLocalStorage));
    }
  }, [url]);

  const getInputData = (e: ChangeEvent<HTMLInputElement>) => {
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

  const checkIfInputIsNotEmpty = (e: FormEvent<HTMLFormElement>) => {
    const keyword = inputData.trim();

    if (keyword) {
      setUrl(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=30`);
    } else {
      showError('You entered an empty search term, please fix it');
    }

    e.preventDefault();
  };

  return (
    <header className={classes.header}>
      <form className={classes.form} onSubmit={checkIfInputIsNotEmpty}>
        <SearchField
          value={inputData}
          changeEvent={getInputData}
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
    </header>
  );
}

export default Header;
