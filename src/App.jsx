import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Formik from './pages/Formik';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
      { path: '/formik', element: <Formik /> },
      { path: '/products', element: <Products /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/products/:id',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
