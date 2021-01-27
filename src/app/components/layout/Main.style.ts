import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 200px)'
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}));

export default useStyles;
