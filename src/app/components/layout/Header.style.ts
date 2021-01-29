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
  buttonHover: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      transition: '150ms all ease-in-out'
    },
    '&:active': {
      boxShadow: `inset 0 0 0 3px ${theme.palette.secondary.main}`,
      transition: '150ms all ease-in-out'
    }
  }
}));

export default useStyles;
