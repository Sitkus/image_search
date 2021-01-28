import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app';

import { PhotosProvider, KeywordsProvider } from './app/context';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

ReactDOM.render(
  <React.StrictMode>
    <KeywordsProvider>
      <PhotosProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PhotosProvider>
    </KeywordsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
