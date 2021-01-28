import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  images: {
    flex: '0 0 100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}));

export default useStyles;
