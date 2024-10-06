import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="flex justify-center space-x-4 py-4">
        <ul className="flex space-x-8">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-400"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-400"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-400"}>Resume</NavLink>
          </li>
        </ul>
      </nav>
      <div className="text-center mb-5 bg-gray-800 text-white py-2">
        <h1 className="text-4xl">Название страницы</h1>
        <h2 className="text-2xl text-gray-300">...</h2>
      </div>
    </header>
  );
}

export default Header;
