import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import { ThemeProvider } from '@emotion/react';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
