import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ConnectFooter = () => (
  <footer id="connect" className="py-12 px-6 bg-pink-50 text-gray-800 text-center rounded-t-xl shadow-md">
    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
      <FaEnvelope className="inline-block w-7 h-7 text-pink-400" />
      Let's Connect!
    </h2>
    <p className="mb-6 text-lg text-muted-foreground">
      Feel free to reach out via email or connect with me on social media.
    </p>
    <blockquote className="italic text-base text-purple-700 mb-8">
      "The brain is wider than the sky." <br />
      <span className="text-sm text-gray-500">— Emily Dickinson</span>
    </blockquote>
    <div className="flex justify-center gap-8">
      <a
        href="mailto:nippanimeghana@gmail.com"
        aria-label="Email"
        className="hover:bg-pink-100 hover:text-pink-600 transition rounded-full p-3 shadow"
      >
        <FaEnvelope className="w-7 h-7" />
      </a>
      <a
        href="https://github.com/Nippani-Meghana"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:bg-blue-100 hover:text-blue-600 transition rounded-full p-3 shadow"
      >
        <FaGithub className="w-7 h-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/nippani-meghana/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:bg-purple-100 hover:text-purple-600 transition rounded-full p-3 shadow"
      >
        <FaLinkedin className="w-7 h-7" />
      </a>
    </div>
  </footer>
);

export default ConnectFooter;