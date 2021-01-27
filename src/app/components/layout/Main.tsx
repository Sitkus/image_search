import useStyles from './Main.style';
import { ImagesList } from '../common';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <ImagesList />
    </main>
  );
}

export default Main;
