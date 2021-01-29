import { useState } from 'react';
import { Header, Main, Footer } from './components/layout';

function App() {
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputData, setInputData] = useState('');
  const [errorMessage, setErrorMessage] = useState('Please fill in the search input field');

  const saveKeywordToLocalStorage = (updatedKeywords: string[]) => {
    localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
  };

  return (
    <>
      <Header
        inputIsEmpty={inputIsEmpty}
        setInputIsEmpty={setInputIsEmpty}
        inputData={inputData}
        setInputData={setInputData}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        saveKeywordToLocalStorage={saveKeywordToLocalStorage}
      />
      <Main setInputData={setInputData} saveKeywordToLocalStorage={saveKeywordToLocalStorage} />
      <Footer />
    </>
  );
}

export default App;
