import React, { useState } from 'react';
import { Landing } from '../Landing';
import { About } from '../About';
import { Skills } from '../Skills';
import { Content } from '../Content';
import { Footer } from '../Footer';
import Navbar from '../../components/Navbar';
import Experience from '../Experience';

export const Home = () => {
  const [isNavbarLoaded, setIsNavbarLoaded] = useState(false);

  return (
    <div className="min-h-screen w-full relative" id="appBody">
      <Navbar setIsNavbarLoaded={setIsNavbarLoaded} />
      <Landing isNavbarLoaded={isNavbarLoaded} />
      <About />
      <Skills />
      <Experience />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
