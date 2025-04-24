import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab, India",
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      duration: "Aug' 22 – Present",
      score: "CGPA: 8.84"
    },
    {
      institution: "MJPTBC Junior College",
      location: "Hanamkonda, Telangana, India",
      degree: "Intermediate",
      duration: "Jun' 20 – Mar' 22",
      score: "Percentage: 95.7%"
    },
    {
      institution: "TSRS High School",
      location: "Hanamkonda, Telangana, India",
      degree: "Matriculation",
      duration: "Jun'19–Apr'20",
      score: "Percentage: 100%"
    }
  ];

  return (
    <div className="education-container">
      <div className="education-content">
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="institution-name">{edu.institution}</h3>
              <div className="institution-location">{edu.location}</div>
              <div className="degree">{edu.degree}</div>
              {edu.major && <div className="degree">{edu.major}</div>}
              <div className="duration">{edu.duration}</div>
              <div className="score">{edu.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;