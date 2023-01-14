import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/_router';

createRoot(document.getElementById('root')!).render(
    <Router />
);
