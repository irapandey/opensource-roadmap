import React, { useMemo } from 'react';
import './SectionCard.css';

const getStepSummary = (sections) => {
  const itemCount = sections.reduce((total, subsection) => {
    return (
      total +
      subsection.items.reduce((count, item) => {
        if (typeof item === 'object' && item.type === 'group') {
          return count + item.items.length;
        }

        return count + 1;
      }, 0)
    );
  }, 0);

  return `${sections.length} focus areas • ${itemCount} key points`;
};

const SectionCard = ({ section, index, isCompleted, onCompletionToggle }) => {
  const primarySection = section.sections[0];
  const additionalSections = section.sections.slice(1);
  const visibleSections = additionalSections.length > 0 ? additionalSections : section.sections;
  const stepSummary = useMemo(() => getStepSummary(section.sections), [section.sections]);

  const handleCheckboxChange = () => {
    onCompletionToggle(section.id, !isCompleted);
  };

  return (
    <article
      className={`section-card section-card-single ${isCompleted ? 'completed' : ''}`}
      style={{ '--index': index }}
    >
      <div className="section-card-intro">
        <div className="section-badge-row">
          <span className="section-number">Step {index + 1}</span>
          <span className="section-summary">{stepSummary}</span>
        </div>

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
              {subsection.subtitle && <h3 className="subsection-title">{subsection.subtitle}</h3>}
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
