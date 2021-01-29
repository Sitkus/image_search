import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 200px)',
    margin: '50px 0 0'
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
  keywords: {
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  keywordContainer: {
    position: 'relative'
  },
  keyword: {
    boxShadow: `inset 0 0 0 3px ${theme.palette.secondary.main}`,
    margin: '5px',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  removeKeyword: {
    position: 'absolute',
    top: '-3px',
    right: '-3px',
    background: 'none',
    color: '#ed4337',
    transition: '150ms all ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
      transition: '150ms all ease-in-out'
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
