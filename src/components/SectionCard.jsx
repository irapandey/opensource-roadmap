import React, { useMemo, useState, useEffect } from 'react';
import './SectionCard.css';

// Icon components for each section type
const getSectionIcon = (subtitle) => {
  const iconStyle = { width: '24px', height: '24px', marginRight: '12px', flexShrink: 0 };
  
  if (subtitle.includes('Key Idea')) {
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  } else if (subtitle.includes('What to Do')) {
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  } else if (subtitle.includes('What to Avoid')) {
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  } else if (subtitle.includes('Pro Tip')) {
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  }
  return null;
};

const SectionCard = ({ section, index, isCompleted, onCompletionToggle }) => {
  const primarySection = section.sections[0];
  const additionalSections = section.sections.slice(1);
  const visibleSections = additionalSections.length > 0 ? additionalSections : section.sections;
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCheckboxChange = () => {
    const newCompletedState = !isCompleted;
    onCompletionToggle(section.id, newCompletedState);
    
    // Show confetti when marking as complete
    if (newCompletedState) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    }
  };

  return (
    <article
      className={`section-card section-card-single ${isCompleted ? 'completed' : ''}`}
      style={{ '--index': index }}
    >
      {showConfetti && (
        <div className="mini-confetti-container" aria-hidden="true">
          <span className="mini-confetti mini-confetti-1"></span>
          <span className="mini-confetti mini-confetti-2"></span>
          <span className="mini-confetti mini-confetti-3"></span>
          <span className="mini-confetti mini-confetti-4"></span>
          <span className="mini-confetti mini-confetti-5"></span>
          <span className="mini-confetti mini-confetti-6"></span>
        </div>
      )}
      <div className="section-card-intro">
        <div className="section-title-row">
          <h2 className="section-title">
            <a target="_blank" href={section.blogUrl} rel="noopener noreferrer" className="section-title-link">
              {section.title}
              <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </h2>
          <span className="section-number">Step {index + 1}</span>
        </div>

        {primarySection?.items?.[0] && (
          <p className="section-description">{primarySection.items[0]}</p>
        )}
      </div>

      <div className="section-content section-content-static expanded">
        <div className="section-content-inner">
          {visibleSections.map((subsection, idx) => (
            <div
              key={idx}
              className={`subsection ${subsection.subtitle === 'Pro Tip' ? 'subsection-full-width' : ''}`}
            >
              {subsection.subtitle && (
                <h3 className="subsection-title">
                  {getSectionIcon(subsection.subtitle)}
                  {subsection.subtitle}
                </h3>
              )}
              <ul className="subsection-list">
                {subsection.items.map((item, itemIdx) => {
                  if (typeof item === 'object' && item.type === 'group') {
                    return (
                      <li key={itemIdx} className="subsection-group">
                        <div className="group-title">{item.title}</div>
                        <ul className="group-items">
                          {item.items.map((groupItem, groupIdx) => (
                            <li key={groupIdx} className="group-item">
                              {groupItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={itemIdx} className="subsection-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="completion-row">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            aria-label={`Mark ${section.title} as completed`}
          />
          <span className="checkmark"></span>
          <span className="completion-label">
            {isCompleted ? 'Completed' : 'Mark this step as complete'}
          </span>
        </label>
      </div>
    </article>
  );
};

export default SectionCard;

// Made with Bob
