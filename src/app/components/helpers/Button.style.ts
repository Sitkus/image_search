import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    border: 'none',
    outline: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: '10px 20px',
    cursor: 'pointer',
    transition: '150ms all ease-in-out',
    '&:active': {
      boxShadow: `inset 0 0 0 3px ${theme.palette.primary.main}`,
      transition: '150ms all ease-in-out'
    }
  }
}));

export default useStyles;
