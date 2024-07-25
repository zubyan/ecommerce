import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { UserProvider } from './store/auth-context';
import { CartProvider } from './store/Cart-Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
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
  return (
    <CartProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </CartProvider>
  );
}

export default App;
