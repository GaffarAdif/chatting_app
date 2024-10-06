// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa"; // Example icon

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center">
        <FaComments className="mr-2 text-2xl" />
        <h1 className="text-xl font-bold">Chat Application</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/chat" className="hover:underline">
              Chat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
