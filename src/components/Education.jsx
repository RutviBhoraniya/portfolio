import React from 'react';
import '../assets/css/education.css';

const Education = () => {
  return (
    <div className="Education">
      <h1 className="education-title">Education</h1>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Bachelor of Technology (Computer Engineering)</h2>
            <p>Marwadi University | 2022 - 2026</p>
            <p>CGPA : 9.46</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Higher Secondary (Science)</h2>
            <p>Orpat Girls School | 2020 - 2022</p>
            <p>Percentage : 78.33</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Secondary Education</h2>
            <p>Orpat Girls School | 2019 - 2020</p>
            <p>Percentage : 77.83</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
