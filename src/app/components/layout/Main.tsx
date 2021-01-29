import { Dispatch, SetStateAction } from 'react';
import { usePhotos, useKeywords } from '../../context';
import useStyles from './Main.style';

import { ImagesList } from '../common';
import { Button } from '../helpers';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

interface Props {
  setInputData: Dispatch<SetStateAction<string>>;
  saveKeywordToLocalStorage: (updatedKeywords: string[]) => void;
}

function Main({ setInputData, saveKeywordToLocalStorage }: Props) {
  const classes = useStyles();

  const { isLoading, photos, setUrl } = usePhotos();
  const { savedKeywords, setSavedKeywords } = useKeywords();

  const searchByKeyword = (keyword: string) => {
    setInputData(keyword);

    setUrl(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=30`);
  };

  const removeKeyword = (keyword: string) => {
    const removedKeyword = savedKeywords.filter(item => item !== keyword);

    saveKeywordToLocalStorage(removedKeyword);
    setSavedKeywords(removedKeyword);
  };

  return (
    <main className={classes.main}>
      {savedKeywords ? (
        <article className={classes.keywords}>
          {savedKeywords.map(keyword => (
            <Button
              clickEvent={() => searchByKeyword(keyword)}
              key={keyword}
              btnType="button"
              className={classes.keyword}
            >
              {keyword}
              <RemoveCircleIcon
                onClick={() => removeKeyword(keyword)}
                fontSize="large"
                className={classes.removeKeyword}
              />
            </Button>
          ))}
        </article>
      ) : null}
      {isLoading ? <div className={classes.spinBox}></div> : <ImagesList />}
      {photos.length < 1 && !isLoading ? <p>We couldn't find any photos with your keyword, sorry! :(</p> : null}
    </main>
  );
}

export default Main;
