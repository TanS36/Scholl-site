import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.sass';

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header}`}>
      <div className="text-2xl font-bold">
        <Link to="/">School Site</Link>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link to="/schedule" className="hover:underline">
          Schedule
        </Link>
        <Link to="/dociment-requests" className="hover:underline">
          Documents
        </Link>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/help" className="hover:underline">
          Help
        </Link>

        {menuOpen && isLoggedIn && (
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        )}

        {!menuOpen && isLoggedIn && (
          <div className={styles.profileButton}>
            <Link to="/profile" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors">
              Profile
            </Link>
          </div>
        )}
      </nav>

      <button className={styles.burger} onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
