import useStyles from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.test}>
      <h1>Main here</h1>
    </div>
  );
}

export default Main;
