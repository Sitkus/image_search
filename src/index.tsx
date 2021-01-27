import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import { PhotosProvider } from './app/context';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

ReactDOM.render(
  <React.StrictMode>
    <PhotosProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PhotosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
