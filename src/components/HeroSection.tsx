import React from 'react';
import { Brain, Cpu, Award, Calendar, User } from 'lucide-react';
import heroImage from '../assets/neural-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Hero gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-60" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-pink-700">
            Nippani Meghana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Exploring the intersection of <span className="text-primary font-medium">neuroscience</span> and <span className="text-primary font-medium">computation</span>
          </p>
        </div>

        {/* Profile info cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="project-card">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-lg font-medium">Academic Profile</h3>
            </div>
            <div className="text-left space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium">CGPA:</span> 9.64/10.0</p>
              <p><span className="font-medium">Degree:</span> BTech CSE IoT</p>
              <p><span className="font-medium">Year:</span> 2nd Year</p>
              <p><span className="font-medium">Expected Graduation:</span> 2028</p>
            </div>
          </div>

          <div className="project-card">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-lg font-medium">Specializations</h3>
            </div>
            <div className="text-left space-y-2 text-sm text-muted-foreground">
              <p><span className="font-medium">Neuroscience:</span> IIT Madras Certified</p>
              <p><span className="font-medium">Data Science:</span> Advanced Analytics</p>
              <p><span className="font-medium">ML/AI:</span> Predictive Modeling</p>
              <p><span className="font-medium">Current Role:</span> Data Analysis Intern</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            className="btn-neural"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Cpu className="w-5 h-5 mr-2 inline" />
            View Projects
          </button>
          <button
            className="btn-ghost-neural"
            onClick={() => {
              const el = document.getElementById('connect');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
          <User className="w-5 h-5 mr-2 inline" />
            Connect
          </button>
        </div>

        {/* Fun neuroscience fact */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground italic">
            "The human brain has approximately 86 billion neurons, each connected to thousands of others..."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;