import { usePhotos, useSearch, useError } from '../../context';
import useStyles from './Main.style';

import { ImagesList } from '../common';

function Main() {
  const classes = useStyles();

  const { inputIsEmpty } = useSearch();
  const { errorMessage } = useError();
  const { isLoading, photos } = usePhotos();

  return (
    <main className={classes.main}>
      {isLoading ? <div className={classes.spinBox}></div> : <ImagesList />}

      {photos.length < 1 && !isLoading ? <p>We couldn't find any photos with your keyword, sorry! :(</p> : null}

      {inputIsEmpty ? <p className={classes.error}>{errorMessage}</p> : null}
    </main>
  );
}

export default Main;
