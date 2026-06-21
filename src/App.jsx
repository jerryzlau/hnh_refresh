import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import HealthEducation from './pages/HealthEducation';
import Contact from './pages/Contact';
import CRLayout from './pages/clinical-research/CRLayout';
import CRIndex from './pages/clinical-research/CRIndex';
import CRAbout from './pages/clinical-research/CRAbout';
import CRServices from './pages/clinical-research/CRServices';
import CRParticipation from './pages/clinical-research/CRParticipation';
import CRRevolutionRx from './pages/clinical-research/CRRevolutionRx';
import CRContact from './pages/clinical-research/CRContact';

function MainLayout() {
  return (
    <>
      <Topbar />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/health-education" element={<HealthEducation />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/clinical-research" element={<CRLayout />}>
        <Route index element={<CRIndex />} />
        <Route path="about" element={<CRAbout />} />
        <Route path="services" element={<CRServices />} />
        <Route path="participation" element={<CRParticipation />} />
        <Route path="revolutionrx" element={<CRRevolutionRx />} />
        <Route path="contact" element={<CRContact />} />
      </Route>
    </Routes>
  );
}
