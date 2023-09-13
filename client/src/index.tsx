import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import { TestComponent } from './components/TestComponent/TestComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/test', element: <TestComponent /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);





