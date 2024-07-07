import { UserContext } from '../store/auth-context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';

import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [user, setUser] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem('user-info'));
    return currentUser ? currentUser.user : null;
  });
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserContext.Provider>
  );
};

export default Root;
