import { ReactNode, useState, useContext, createContext } from 'react';

type PhotosProviderProps = {
  children: ReactNode;
};

interface PhotosContextProps {
  authKey: string;
  isLoading: boolean;
  setIsLoading: any;
  photos: any;
  setPhotos: any;
  url: string;
  setUrl: any;
}

const PhotosContext = createContext<PhotosContextProps>({
  authKey: '',
  isLoading: false,
  setIsLoading: false,
  photos: [],
  setPhotos: [],
  url: '',
  setUrl: ''
});

function PhotosProvider({ children }: PhotosProviderProps) {
  const [authKey] = useState('hvzPv9AzWm0mairp-LGBDydxJpGstEadNlUIH8sfxxo');
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [url, setUrl] = useState('');

  return (
    <PhotosContext.Provider value={{ authKey, isLoading, setIsLoading, photos, setPhotos, url, setUrl }}>
      {children}
    </PhotosContext.Provider>
  );
}

/**
 * useContext already prepared for use in other files
 */
const usePhotos = () => {
  return useContext(PhotosContext);
};

export { PhotosProvider, usePhotos };
