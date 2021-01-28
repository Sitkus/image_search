import { usePhotos } from '../../context';
import useStyles from './ImagesList.style';
import ImageBox from './ImageBox';

function ImagesList() {
  const classes = useStyles();

  const { isLoading, photos } = usePhotos();

  return (
    <section className={classes.images}>
      {!isLoading || photos
        ? photos.map((photo: any) => (
            <ImageBox key={photo.id} imgSrc={photo.urls.small} imgAlt={photo.alt_description} />
          ))
        : null}
    </section>
  );
}

export default ImagesList;
