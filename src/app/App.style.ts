import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  keywords: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '50px',
    margin: '10px 0',
    padding: '0 10px'
  }
}));

export default useStyles;
