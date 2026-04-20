import React, { useRef, useEffect } from 'react';
import './SectionCard.css';

const SectionCard = ({ section, index, isFirstSection, onToggle, isOpen, isCompleted, onCompletionToggle }) => {
  const cardRef = useRef(null);
  const prevIsOpenRef = useRef(isOpen);

  useEffect(() => {
    // Only scroll when transitioning from closed to open (not when already open or closing)
    if (isOpen && !prevIsOpenRef.current && cardRef.current) {
      // Delay to allow the expansion animation to complete (CSS transition is 0.5s)
      setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 550);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  const handleToggle = () => {
    onToggle(section.id);
  };

  const handleCheckboxChange = () => {
    onCompletionToggle(section.id, !isCompleted);
  };

  return (
    <div
      ref={cardRef}
      className={`section-card ${isOpen ? 'open' : ''} ${isCompleted ? 'completed' : ''}`}
      style={{ '--index': index }}
    >
      <div className="section-header" onClick={handleToggle}>
        <div className="section-header-left">
          <span className="section-number">{index + 1}</span>
          <h2 className="section-title">{section.title}</h2>
        </div>
        <div className="section-header-right">
          <label className="checkbox-container" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckboxChange}
              aria-label={`Mark ${section.title} as completed`}
            />
            <span className="checkmark"></span>
          </label>
          <span className={`expand-icon ${isOpen ? 'rotated' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      
      <div className={`section-content ${isOpen ? 'expanded' : ''}`}>
        <div className="section-content-inner">
          {section.sections.map((subsection, idx) => (
            <div key={idx} className="subsection">
              {subsection.subtitle && (
                <h3 className="subsection-title">{subsection.subtitle}</h3>
              )}
              <ul className="subsection-list">
                {subsection.items.map((item, itemIdx) => {
                  // Handle grouped items with nested structure
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
                  // Handle regular string items
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
    </div>
  );
};

export default SectionCard;

// Made with Bob
