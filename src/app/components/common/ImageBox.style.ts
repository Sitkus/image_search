import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    flex: '0 0 300px',
    overflow: 'hidden',
    position: 'relative',
    margin: '20px 25px'
    //
  },
  boxImage: {
    display: 'block',
    objectFit: 'cover',
    height: '300px',
    width: '300px'
    //
  },
  boxHidden: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '30px',
    backgroundColor: 'rgba(244, 244, 244, 0.8)',
    width: '100%'
  },
  boxDescription: {
    fontSize: '16px',
    fontWeight: 500
    //
  }
}));

export default useStyles;
