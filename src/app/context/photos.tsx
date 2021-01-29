import { Dispatch, SetStateAction, ReactNode, useState, useContext, createContext } from 'react';
import { useError } from './';

type PhotosProviderProps = {
  children: ReactNode;
};

interface PhotosContextProps {
  authKey: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  photos: object[];
  setPhotos: Dispatch<SetStateAction<object[]>>;
  fetchPhotos: (newUrl: string) => void;
}

const PhotosContext = createContext<PhotosContextProps>({
  authKey: 'hvzPv9AzWm0mairp-LGBDydxJpGstEadNlUIH8sfxxo',
  isLoading: true,
  setIsLoading: () => {},
  url: 'https://api.unsplash.com/photos/random?count=30',
  setUrl: () => '',
  photos: [],
  setPhotos: () => [],
  fetchPhotos: () => {}
});

function PhotosProvider({ children }: PhotosProviderProps) {
  const { removeError } = useError();

  const [authKey] = useState('hvzPv9AzWm0mairp-LGBDydxJpGstEadNlUIH8sfxxo');
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState('https://api.unsplash.com/photos/random?count=30');
  const [photos, setPhotos] = useState<object[]>([]);

  const fetchPhotos = async (newUrl: string) => {
    removeError();

    const response = await fetch(newUrl, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${authKey}`
      }
    });
    const fetchedPhotos = await response.json();

    if (fetchedPhotos.results) {
      setPhotos(fetchedPhotos.results);
    } else {
      setPhotos(fetchedPhotos);
    }

    setIsLoading(false);
  };

  return (
    <PhotosContext.Provider value={{ authKey, isLoading, setIsLoading, url, setUrl, photos, setPhotos, fetchPhotos }}>
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
