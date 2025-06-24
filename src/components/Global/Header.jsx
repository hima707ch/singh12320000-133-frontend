import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header
      id="Header_1"
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div id="Header_2" className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={images[0]}
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">E-Shop</span>
            </Link>
          </div>

          <nav id="Header_3" className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/productlistingpage' },
              { name: 'Cart', path: '/cartpage' },
              { name: 'Profile', path: '/userprofilepage' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-colors duration-200 ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div id="Header_4" className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
              >
                🔍
              </button>
            </form>

            <Link
              to="/loginpage"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          <button
            id="Header_5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="Header_6"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/productlistingpage' },
            { name: 'Cart', path: '/cartpage' },
            { name: 'Profile', path: '/userprofilepage' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/loginpage"
            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;