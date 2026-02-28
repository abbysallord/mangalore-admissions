// src/App.jsx

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Features from './components/sections/Features';
import Gallery from './components/sections/Gallery';
import Courses from './components/sections/Courses';
import Testimonials from './components/sections/Testimonials';
import CollegePartners from './components/sections/CollegePartners';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Gallery />
      <Courses />
      <Testimonials />
      <CollegePartners />
      <Contact />
      <Footer />
    </>
  );
}
