import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/_router';
import { GlobalStyles } from './styles';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <Router />
  </>,
);
