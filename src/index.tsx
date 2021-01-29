import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app';

import { PhotosProvider, SearchProvider, KeywordsProvider, ErrorProvider } from './app/context';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <ErrorProvider>
        <PhotosProvider>
          <KeywordsProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </KeywordsProvider>
        </PhotosProvider>
      </ErrorProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
