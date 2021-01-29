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
  }
}));

export default useStyles;
