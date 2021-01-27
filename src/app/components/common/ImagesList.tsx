import useStyles from './ImagesList.style';
import ImageBox from './ImageBox';

function ImagesList() {
  const classes = useStyles();

  return (
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
  );
}

export default ImagesList;
