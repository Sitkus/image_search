import { usePhotos } from '../../context';
import useStyles from './ImagesList.style';
import ImageBox from './ImageBox';

interface PhotoProps {
  id: number;
  urls: {
    small: string;
  };
  alt_description: string;
}

function ImagesList() {
  const classes = useStyles();
  const { isLoading, photos } = usePhotos();

  return (
    <section className={classes.images}>
      {!isLoading || photos
        ? photos.map((photo: PhotoProps) => (
            <ImageBox key={photo.id} imgSrc={photo.urls.small} imgAlt={photo.alt_description} />
          ))
        : null}
    </section>
  );
}

export default ImagesList;
