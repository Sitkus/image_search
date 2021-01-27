import useStyles from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <h1>Main here</h1>
    </main>
  );
}

export default Main;
