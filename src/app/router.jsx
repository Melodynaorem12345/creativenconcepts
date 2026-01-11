
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
          <Route index element={<Navigate to="modular-kitchen" />} />
          
          {/* Nested Route Handling for Living Room Sub-Categories */}
          <Route path="living-room">
            <Route index element={<ServiceDetails fixedSlug="living-room" />} />
            <Route path="tv-console" element={<ServiceDetails fixedSlug="tv-console" />} />
            <Route path="crockery-unit" element={<ServiceDetails fixedSlug="crockery-unit" />} />
            <Route path="foyer" element={<ServiceDetails fixedSlug="foyer" />} />
            <Route path="pooja-room" element={<ServiceDetails fixedSlug="pooja-room" />} />
            <Route path="vanity" element={<ServiceDetails fixedSlug="vanity" />} />
          </Route>
          
          {/* Dynamic route for other top-level services */}
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
