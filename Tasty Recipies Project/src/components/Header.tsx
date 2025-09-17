import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <ChefHat className="h-8 w-8 text-red-600 mr-2" strokeWidth={2} />
          <h1 className="text-2xl font-bold text-gray-800 font-heading">
            Tasty<span className="text-red-600">Recipes</span>
          </h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-red-600'
                } font-medium pb-1 transition-colors duration-200`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className={`${
                  location.pathname === '/recipes'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-red-600'
                } font-medium pb-1 transition-colors duration-200`}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`${
                  location.pathname === '/login'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-red-600'
                } font-medium pb-1 transition-colors duration-200`}
              >
                Login/SU
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;