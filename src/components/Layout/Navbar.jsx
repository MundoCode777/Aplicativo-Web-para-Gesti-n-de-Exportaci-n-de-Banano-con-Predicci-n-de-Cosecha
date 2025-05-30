import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-banano-primary text-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Banana Export Manager</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-banano-secondary text-banano-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              4
            </span>
          </div>
          <FaUserCircle className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;