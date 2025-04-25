import React from 'react';
import './Certificates.css';
import BoardInfinity from '../../assets/BoardInfinity.jpg'
import softwareTesting from '../../assets/softwareTesting.png';
import kotlin from '../../assets/kotlin.png'
import frontend from '../../assets/frontend.png'

const Certificates = () => {
  const certificates = [
    {
      name: "Explore a Career in Front-End Web",
      issuer: "Great Learning",
      date: "Feb' 23",
      image: frontend
    },
    {
      name: "Database Management System and SQL",
      issuer: "Board Infinity",
      date: "Jul' 24",
      image: BoardInfinity
    },
    {
      name: "Programming Fundamentals in Kotlin",
      issuer: "Coursera",
      date: "Nov' 24",
      image: kotlin
    },
    {
      name: "NPTEL Online Certification in Software Testing",
      issuer: "NPTEL (SWAYAM, GOI)",
      date: "Oct' 24",
      image: softwareTesting
    }
  ];

  return (
    <div className="certificates-container">
      <div className="certificates-content">
        <h2 className="certificates-title">CERTIFICATES & ACHIEVEMENTS</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="certificate-image"
                />
              </div>
              <h3 className="certificate-name">{cert.name}</h3>
              <div className="certificate-issuer">{cert.issuer}</div>
              <div className="certificate-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;