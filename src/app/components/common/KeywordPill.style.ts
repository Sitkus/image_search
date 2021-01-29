import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
      background: 'none',
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
    cursor: 'pointer',
    transition: '150ms all ease-in-out',
    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
      transition: '150ms all ease-in-out'
    }
  }
}));

export default useStyles;
