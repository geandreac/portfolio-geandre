import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { AboutMe } from './components/sections/AboutMe';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contacts } from './components/sections/Contacts';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { ProgressBar } from './components/ui/ProgressBar';
import { CustomCursor } from './components/ui/CustomCursor';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen text-text font-mono selection:bg-purple/30 selection:text-purple">
      <CustomCursor />
      <ProgressBar />
      <Sidebar />
      <Navbar />
      
      <main className="lg:ml-[48px] pt-[64px]">
        <Hero />
        <Projects />
        <Skills />
        <AboutMe />
        <Experience />
        <Contacts />
      </main>
      
      <div className="lg:ml-[48px]">
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default App;
