import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { usePhotos } from '../../context';
import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

function Header() {
  const classes = useStyles();
  const { authKey, isLoading, setIsLoading, photos, setPhotos, url, setUrl } = usePhotos();
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    fetchPhotos(url);
  }, []);

  const collectInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const checkIfInputIsNotEmpty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputData) {
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

    console.log(fetchedPhotos);
    setIsLoading(false);
  };

  const showError = () => {
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
      </form>
      {inputIsEmpty ? <p className={classes.error}>Please fill in the search input field</p> : null}
    </header>
  );
}

export default Header;
