
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@app/layout/Header';
import Footer from '@app/layout/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
