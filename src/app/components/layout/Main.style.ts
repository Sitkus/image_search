import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    display: 'flex',
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
  }
}));

export default useStyles;
