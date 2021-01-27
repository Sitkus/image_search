import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100px'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  error: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'red',
    padding: '7px 0',
    zIndex: 10
  }
}));

export default useStyles;
