import useStyles from './index.style';
import { Header, Main, Footer } from './components/layout';

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
