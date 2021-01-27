import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    overflow: 'hidden',
    position: 'relative',
    margin: '20px 25px'
  },
  boxImage: {
    display: 'block',
    objectFit: 'cover',
    height: '300px',
    width: '100%'
  }
}));

export default useStyles;
