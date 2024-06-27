import { AuthContext } from '../store/auth-context';
import Header from '../components/Header';
import Footer from '../components/Footer';

import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <AuthContext.Provider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AuthContext.Provider>
  );
};

export default Root;
