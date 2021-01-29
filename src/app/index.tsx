// import { useState } from 'react';
import { Header, Main, Footer } from './components/layout';

function App() {
  // const [inputIsEmpty, setInputIsEmpty] = useState(false);
  // const [inputData, setInputData] = useState('');
  // const [errorMessage, setErrorMessage] = useState('Please fill in the search input field');

  // const saveKeywordToLocalStorage = (updatedKeywords: string[]) => {
  //   localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
  // };

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
