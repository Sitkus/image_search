import useStyles from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.test}>
      <h1>Header here</h1>
    </div>
  );
}

export default Header;
