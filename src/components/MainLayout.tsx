import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  // Redirect to login if not logged in
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
