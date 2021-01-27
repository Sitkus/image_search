import { usePhotos } from '../../context';
import useStyles from './Main.style';
import { ImagesList } from '../common';

function Main() {
  const classes = useStyles();
  const { authKey, isLoading, setIsLoading, photos, setPhotos, url, setUrl } = usePhotos();

  return (
    <main className={classes.main}>
      {isLoading ? <p>Loading...</p> : <ImagesList />}
      {photos.length < 1 && !isLoading ? <p>We couldn't find any photos with your keyword, sorry! :(</p> : null}
    </main>
  );
}

export default Main;
