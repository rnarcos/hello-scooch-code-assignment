import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllergiesQuizPage } from '..';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllergiesQuizPage />,
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
