import { Dispatch, SetStateAction, ReactNode, useState, useContext, createContext } from 'react';
import { useSearch } from './';

type ErrorProviderProps = {
  children: ReactNode;
};

interface ErrorContextProps {
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  showError: (msg: string) => void;
  removeError: () => void;
}

const ErrorContext = createContext<ErrorContextProps>({
  errorMessage: '',
  setErrorMessage: () => '',
  showError: () => {},
  removeError: () => {}
});

function ErrorProvider({ children }: ErrorProviderProps) {
  const { setInputIsEmpty } = useSearch();
  const [errorMessage, setErrorMessage] = useState('Please fill in the search input field');

  const showError = (msg: string = 'Please fill in the search input field') => {
    setErrorMessage(msg);

    setInputIsEmpty(true);
  };

  const removeError = () => {
    setInputIsEmpty(false);
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage, showError, removeError }}>
      {children}
    </ErrorContext.Provider>
  );
}

/**
 * useContext already prepared for use in other files
 */
const useError = () => {
  return useContext(ErrorContext);
};

export { ErrorProvider, useError };
