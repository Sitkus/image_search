import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    maxWidth: '400px',
    width: '60%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: theme.palette.primary.light,
    '&:focus': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`
    }
  }
}));

export default useStyles;
