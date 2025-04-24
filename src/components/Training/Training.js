import React from 'react';
import './Training.css';
import BoardInfinity from '../../assets/BoardInfinity.jpg'
const Training = () => {
  return (
    <div className="training-container">
      <div className="training-content">
        <h2 className="training-title">TRAINING</h2>
        <div className="training-card">
          <h3 className="institute-name">Board Infinity (Career-Tech platform)</h3>
          <div className="training-period">Jun' 24 – Jul' 24</div>
          <div className="training-details">
            <ul>
              <li>Gained in-depth knowledge of relational database concepts, normalization, and database schema design.</li>
              <li>Mastered SQL queries for data retrieval, manipulation, and analysis, including complex joins, subqueries, and aggregate functions.</li>
              <li>Learned database optimization techniques and implemented constraints, indexes, and views for efficient data handling.</li>
            </ul>
          </div>
          <div className="certificate-section">
            <img 
              src={BoardInfinity} 
              alt="Training Certificate" 
              className="certificate-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;