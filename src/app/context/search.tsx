import { Dispatch, SetStateAction, ReactNode, useState, useContext, createContext } from 'react';

type SearchProviderProps = {
  children: ReactNode;
};

interface SearchContextProps {
  inputIsEmpty: boolean;
  setInputIsEmpty: Dispatch<SetStateAction<boolean>>;
  inputData: string;
  setInputData: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps>({
  inputIsEmpty: false,
  setInputIsEmpty: () => false,
  inputData: '',
  setInputData: () => ''
});

function SearchProvider({ children }: SearchProviderProps) {
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputData, setInputData] = useState('');

  return (
    <SearchContext.Provider value={{ inputIsEmpty, setInputIsEmpty, inputData, setInputData }}>
      {children}
    </SearchContext.Provider>
  );
}

/**
 * useContext already prepared for use in other files
 */
const useSearch = () => {
  return useContext(SearchContext);
};

export { SearchProvider, useSearch };
