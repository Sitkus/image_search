import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 200px)'
  },
  spinBox: {
    position: 'relative',
    width: '10%',
    backgroundColor: theme.palette.secondary.main,
    animationName: 'loading',
    animationIterationCount: 'infinite',
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out',
    '&::before': {
      content: '""',
      display: 'block',
      paddingTop: '100%'
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
