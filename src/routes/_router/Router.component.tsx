import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllergiesQuizPage, AllergiesQuizCompletionPage } from '..';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllergiesQuizPage />,
  },
  {
    path: '/complete',
    element: <AllergiesQuizCompletionPage />,
  },
  {
    path: '*',
    element: <AllergiesQuizPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
