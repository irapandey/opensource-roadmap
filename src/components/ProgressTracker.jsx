import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ sections, completedSections, progressPercentage }) => {
  return (
    <div className="progress-tracker-card">
      <div className="progress-tracker-header">
        <div>
          <p className="progress-eyebrow">Your progress</p>
          <h3 className="progress-heading">{progressPercentage}% complete</h3>
        </div>
        <span className="progress-counter">
          {Object.values(completedSections).filter(Boolean).length}/{sections.length}
        </span>
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Roadmap completion progress"
      >
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressTracker;

// Made with Bob
