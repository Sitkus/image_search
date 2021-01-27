import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    border: 'none',
    outline: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: '10px 20px',
    cursor: 'pointer'
  }
}));

export default useStyles;
