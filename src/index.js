import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './constants/styles/global-styles';
import { PagesRoutes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PagesRoutes />
    <GlobalStyles />
  </>,
);
