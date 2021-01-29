import { useKeywords } from './context';
import useStyles from './App.style';

import { KeywordPill } from './components/common';
import { Header, Main, Footer } from './components/layout';

function App() {
  const classes = useStyles();

  const { savedKeywords } = useKeywords();

  return (
    <>
      <Header />

      {savedKeywords ? (
        <article className={classes.keywords}>
          {savedKeywords.map(keyword => (
            <KeywordPill key={keyword} keyword={keyword} />
          ))}
        </article>
      ) : null}

      <Main />
      <Footer />
    </>
  );
}

export default App;
