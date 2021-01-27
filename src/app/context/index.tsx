import { ReactNode, useState, useContext, createContext } from 'react';

type PhotosProviderProps = {
  children: ReactNode;
};

interface PhotosContextProps {
  authKey: string;
  isLoading: boolean;
  setIsLoading: any;
  url: string;
  setUrl: any;
  photos: any;
  setPhotos: any;
}

const PhotosContext = createContext<PhotosContextProps>({
  authKey: '',
  isLoading: true,
  setIsLoading: true,
  url: '',
  setUrl: '',
  photos: [],
  setPhotos: []
});

function PhotosProvider({ children }: PhotosProviderProps) {
  const [authKey] = useState('hvzPv9AzWm0mairp-LGBDydxJpGstEadNlUIH8sfxxo');
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState('https://api.unsplash.com/photos/random?count=30');
  const [photos, setPhotos] = useState([]);

  return (
    <PhotosContext.Provider value={{ authKey, isLoading, setIsLoading, url, setUrl, photos, setPhotos }}>
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
