import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { Home } from './screens/Home';
import { ThemeProvider } from '@emotion/react';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
