import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
