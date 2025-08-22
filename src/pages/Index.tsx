import React from 'react';
import NeuralBackground from '../components/NeuralBackground';
import FloatingNeuralElements from '../components/FloatingNeuralElements';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutMe from '../components/AboutMe';
import ConnectFooter from '../components/ConnectFooter';
import CertificationsSection from '../components/CertificationsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Neural network background */}
      <NeuralBackground />
      
      {/* Floating neural elements */}
      <FloatingNeuralElements />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <CertificationsSection />
      </main>

      {/* Footer */}
      <ConnectFooter />
    </div>
  );
};

export default Index;