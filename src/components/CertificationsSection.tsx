import React from "react";
import { FaAward, FaCertificate } from "react-icons/fa";

interface Certification {
  name: string;
  issuer: string;
  year: number;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "Demystifying The Brain",
    issuer: "IIT Madras",
    year: 2025,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25BT17S44160073501318004",
  },
  {
    name: "Data Analysis Internship",
    issuer: "Oasis Infobyte",
    year: 2025,
    link: "https://www.linkedin.com/in/nippani-meghana/",
  }
  // Add any other certifications you already have here
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Centered Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            My achievements and completed courses in neuroscience, machine
            learning, and data science.
          </p>
        </div>
        {/* Smaller Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white bg-opacity-80 rounded-xl shadow-md p-4 max-w-xs mx-auto flex flex-col items-center"
            >
              <FaAward className="w-8 h-8 text-pink-400 mb-2" />
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 font-semibold hover:underline text-lg mb-2 text-center"
                >
                  {cert.name}
                </a>
              ) : (
                <span className="text-pink-700 font-semibold text-lg mb-2 text-center">
                  {cert.name}
                </span>
              )}
              <div className="text-muted-foreground text-sm mb-1 text-center">
                {cert.issuer}
              </div>
              <div className="text-xs text-gray-400 text-center">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;