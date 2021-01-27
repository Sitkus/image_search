import useStyles from './ImageBox.style';

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgDescription: string;
}

function ImageBox({ imgSrc, imgAlt, imgDescription }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <img className={classes.boxImage} src={imgSrc} alt={imgAlt} />
      <div className={classes.boxHidden}>
        <h3 className={classes.boxDescription}>{imgDescription}</h3>
      </div>
    </div>
  );
}

export default ImageBox;
