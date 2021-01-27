import useStyles from './Main.style';
import { ImageBox } from '../common';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <section className={classes.images}>
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
          imgAlt="Text"
          imgDescription="Description here"
        />
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
          imgAlt="Text"
          imgDescription="Description here"
        />
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
          imgAlt="Text"
          imgDescription="Description here"
        />
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
          imgAlt="Text"
          imgDescription="Description here"
        />
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max"
          imgAlt="Text"
          imgDescription="Description here"
        />
      </section>
    </main>
  );
}

export default Main;
