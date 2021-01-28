import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
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
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ed4337',
    color: 'white',
    padding: '10px 0',
    zIndex: 10
  }
}));

export default useStyles;
