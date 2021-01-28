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
  keywords: {
    position: 'absolute',
    bottom: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    flex: '0 0 100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  keyword: {
    boxShadow: `inset 0 0 0 3px ${theme.palette.secondary.main}`,
    marginRight: '10px',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '14px',
    '&:last-child': {
      marginRight: 0
    }
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
