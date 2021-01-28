import { Dispatch, SetStateAction, ReactNode, useState, useContext, createContext } from 'react';

type KeywordsProviderProps = {
  children: ReactNode;
};

interface KeywordsContextProps {
  savedKeywords: string[];
  setSavedKeywords: Dispatch<SetStateAction<string[]>>;
}

const KeywordsContext = createContext<KeywordsContextProps>({
  savedKeywords: [],
  setSavedKeywords: () => []
});

function KeywordsProvider({ children }: KeywordsProviderProps) {
  const [savedKeywords, setSavedKeywords] = useState<string[]>([]);

  return <KeywordsContext.Provider value={{ savedKeywords, setSavedKeywords }}>{children}</KeywordsContext.Provider>;
}

/**
 * useContext already prepared for use in other files
 */
const useKeywords = () => {
  return useContext(KeywordsContext);
};

export { KeywordsProvider, useKeywords };
