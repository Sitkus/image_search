import { usePhotos, useKeywords, useSearch, useError } from '../../context';
import useStyles from './Main.style';

import { ImagesList } from '../common';
import { Button } from '../helpers';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function Main() {
  const classes = useStyles();

  const { inputIsEmpty } = useSearch();
  const { errorMessage } = useError();
  const { isLoading, photos } = usePhotos();
  const { savedKeywords, searchByKeyword, removeKeyword } = useKeywords();

  return (
    <main className={classes.main}>
      {savedKeywords ? (
        <article className={classes.keywords}>
          {savedKeywords.map(keyword => (
            <div className={classes.keywordContainer} key={keyword}>
              <Button
                clickEvent={() => searchByKeyword(keyword)}
                key={keyword}
                btnType="button"
                className={classes.keyword}
              >
                {keyword}
              </Button>
              <RemoveCircleIcon
                onClick={() => removeKeyword(keyword)}
                fontSize="large"
                className={classes.removeKeyword}
              />
            </div>
          ))}
        </article>
      ) : null}
      {isLoading ? <div className={classes.spinBox}></div> : <ImagesList />}

      {photos.length < 1 && !isLoading ? <p>We couldn't find any photos with your keyword, sorry! :(</p> : null}

      {inputIsEmpty ? <p className={classes.error}>{errorMessage}</p> : null}
    </main>
  );
}

export default Main;
