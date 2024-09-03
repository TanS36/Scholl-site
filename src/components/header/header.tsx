import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">
        <Link to="/">School Site</Link>
      </div>

      <nav className="space-x-6">
        <Link to="/schedule" className="hover:underline">
          Schedule
        </Link>
        <Link to="/documents" className="hover:underline">
          Documents
        </Link>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/help" className="hover:underline">
          Help
        </Link>
      </nav>
      <div>
        {isLoggedIn ? (
          <Link to="/profile" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Profile
          </Link>
        ) : (
          <Link to="/login" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Log In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
