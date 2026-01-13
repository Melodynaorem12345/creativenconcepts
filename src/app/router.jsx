
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@app/layout/MainLayout';
import Home from '@features/home/Home';
import AboutSubPage from '@features/about/About';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import ModularJourney from '@features/journey/ModularJourney';
import Projects from '@features/projects/Projects';
import Testimonials from '@features/testimonials/Testimonials';
import Contact from '@features/contact/Contact';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        <Route path="about">
          <Route index element={<Navigate to="who-we-are" />} />
          <Route path=":section" element={<AboutSubPage />} />
        </Route>
        
        <Route path="services">
          <Route index element={<Navigate to="kitchen/acrylic-kitchen" />} />
          <Route path=":category/:serviceSlug" element={<ServiceDetails />} />
          <Route path=":serviceSlug" element={<ServiceDetails />} />
        </Route>
        
        <Route path="modular-journey" element={<ModularJourney />} />
        <Route path="projects" element={<Projects />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Wildcard catch all redirecting to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
