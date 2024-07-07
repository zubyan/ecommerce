import { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../store/auth-context';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const isLoggedIn = !!user;

  //   console.log(isLoggedIn, user);
  function logout() {
    localStorage.removeItem('user-info');
    setUser(null);
  }

  if (isLoggedIn) {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">blo</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/cart" className="mr-5 hover:text-gray-900">
              Cart
            </Link>
            <button className="mr-5 hover:text-gray-900" onClick={logout}>
              LogOut
            </button>
          </nav>
          <form className="flex items-center" role="search">
            <input
              className="form-input mr-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success px-4 py-1 border rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    );
  } else {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">blo</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/signup" className="mr-5 hover:text-gray-900">
              SignUp
            </Link>
            <Link to="/login" className="mr-5 hover:text-gray-900">
              LogIn
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
          </nav>
          <form className="flex items-center" role="search">
            <input
              className="form-input mr-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success px-4 py-1 border rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    );
  }
};

export default Header;
