import { useKeywords } from '../../context';
import useStyles from './KeywordPill.style';

import { Button } from '../helpers';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

interface Props {
  keyword: string;
}

function KeywordPill({ keyword }: Props) {
  const classes = useStyles();

  const { searchByKeyword, removeKeyword } = useKeywords();

  return (
    <div className={classes.keywordContainer}>
      <Button clickEvent={() => searchByKeyword(keyword)} key={keyword} btnType="button" className={classes.keyword}>
        {keyword}
      </Button>
      <RemoveCircleIcon onClick={() => removeKeyword(keyword)} fontSize="large" className={classes.removeKeyword} />
    </div>
  );
}

export default KeywordPill;
