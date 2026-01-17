
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@app/layout/Header';
import Footer from '@app/layout/Footer';
import FloatingWhatsapp from '@shared/components/FloatingWhatsapp';

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
      <FloatingWhatsapp />
    </div>
  );
};

export default MainLayout;
