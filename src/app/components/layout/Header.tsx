import { FormEvent, ChangeEvent, useState } from 'react';
import { usePhotos } from '../../context';
import useStyles from './Header.style';
import { SearchField, Button } from '../helpers';

function Header() {
  const classes = useStyles();
  const { authKey, isLoading, setIsLoading, photos, setPhotos, url, setUrl } = usePhotos();
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputData, setInputData] = useState('');

  const collectInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const checkIfInputIsNotEmpty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputData) {
      fetchPhotos();
    } else {
      showError();

      setTimeout(() => {
        removeError();
      }, 2000);
    }
  };

  const fetchPhotos = () => {
    console.log(authKey, isLoading, photos, url);
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
      {inputIsEmpty ? <p className={classes.error}>Please type in keyword to search for.</p> : null}
    </header>
  );
}

export default Header;
