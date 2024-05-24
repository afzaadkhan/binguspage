import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-violet-700 p-4 border-solid border-b-4 border-violet-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src='https://www.pngmart.com/files/23/Bingus-PNG-Pic.png' 
            alt="Bingus Logo" 
            className="h-12 w-auto mr-3 hidden md:block" 
          />
          <h1 className="text-white text-xl md:text-3xl font-spaceMono font-bold">Bingus</h1>
        </div>
        <nav className="flex flex-grow justify-end"> {/* Right align navigation */}
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                activeClassName="text-blue-500"
                className="text-white hover:text-purple-400 font-spaceMono"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/links" 
                activeClassName="text-blue-500"
                className="text-white hover:text-purple-400 font-spaceMono"
              >
                Links
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/roadmap" 
                activeClassName="text-blue-500"
                className="text-white hover:text-purple-400 font-spaceMono"
              >
                Whitepaper
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
