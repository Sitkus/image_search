import useStyles from './ImageBox.style';

interface Props {
  imgSrc: string;
  imgAlt: string;
}

function ImageBox({ imgSrc, imgAlt }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <img className={classes.boxImage} src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default ImageBox;
