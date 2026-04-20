import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ sections, openSectionId, completedSections }) => {
  return (
    <div className="progress-tracker">
      <div className="progress-line"></div>
      {sections.map((section, index) => {
        const isCompleted = completedSections[section.id] || false;
        const isActive = section.id === openSectionId;
        
        return (
          <div
            key={section.id}
            className={`progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
          >
            <div className="progress-dot">
              {isCompleted ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <span className="progress-number">{index + 1}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;

// Made with Bob
