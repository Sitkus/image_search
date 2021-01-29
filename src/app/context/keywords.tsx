import { Dispatch, SetStateAction, ReactNode, useState, useContext, createContext } from 'react';
import { usePhotos, useError, useSearch } from './';

type KeywordsProviderProps = {
  children: ReactNode;
};

interface KeywordsContextProps {
  savedKeywords: string[];
  setSavedKeywords: Dispatch<SetStateAction<string[]>>;
  saveKeyword: (keyword: string) => void;
  searchByKeyword: (keyword: string) => void;
  removeKeyword: (keyword: string) => void;
}

const KeywordsContext = createContext<KeywordsContextProps>({
  savedKeywords: [],
  setSavedKeywords: () => [],
  saveKeyword: () => {},
  searchByKeyword: () => {},
  removeKeyword: () => {}
});

function KeywordsProvider({ children }: KeywordsProviderProps) {
  const { setUrl } = usePhotos();
  const { showError } = useError();
  const { setInputData } = useSearch();

  const [savedKeywords, setSavedKeywords] = useState<string[]>([]);

  const saveKeyword = (keyword: string) => {
    const keywordAlreadyExists = savedKeywords.indexOf(keyword);
    console.log(keywordAlreadyExists);

    if (keywordAlreadyExists === -1) {
      const newSavedKeywords = [...savedKeywords, keyword];

      saveKeywordToLocalStorage(newSavedKeywords);
      setSavedKeywords(newSavedKeywords);
    } else {
      showError(`You have already saved keyword: ${keyword}`);
    }
  };

  const searchByKeyword = (keyword: string) => {
    setInputData(keyword);

    setUrl(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=30`);
  };

  const removeKeyword = (keyword: string) => {
    const removedKeyword = savedKeywords.filter(item => item !== keyword);

    saveKeywordToLocalStorage(removedKeyword);
    setSavedKeywords(removedKeyword);
  };

  const saveKeywordToLocalStorage = (updatedKeywords: string[]) => {
    localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
  };

  return (
    <KeywordsContext.Provider value={{ savedKeywords, setSavedKeywords, saveKeyword, searchByKeyword, removeKeyword }}>
      {children}
    </KeywordsContext.Provider>
  );
}

/**
 * useContext already prepared for use in other files
 */
const useKeywords = () => {
  return useContext(KeywordsContext);
};

export { KeywordsProvider, useKeywords };
