import React from 'react';
import { FaBrain, FaSearch, FaHeartbeat, FaQuestionCircle } from 'react-icons/fa';

const AboutMe = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border-2 border-pink-200 animate-fade-in">
        <h2 className="text-3xl font-bold text-primary text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am exploring the neural basis of behavior through the lens of computational psychiatry.
          I want to understand the fundamental rules that make the brain 'tick,' and how, when those rules change, they can lead to suffering.
          My interests are driven by the pursuit of not just better treatments, but better questions.<br />
          Can we truly simulate the mind to heal it?<br />
          And how can we do so without compromising the very essence of the person we are trying to understand?
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;