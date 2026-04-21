import React, { useEffect, useMemo, useRef, useState } from 'react';
import SectionCard from './components/SectionCard';
import ProgressTracker from './components/ProgressTracker';
import { roadmapData } from './data/roadmapData';
import './App.css';

const STORAGE_KEY = 'open-source-roadmap-progress';

const createInitialProgress = () => ({
  currentStep: 0,
  completedSections: roadmapData.reduce((accumulator, section) => {
    accumulator[section.id] = false;
    return accumulator;
  }, {})
});

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);

    if (!savedProgress) {
      return createInitialProgress();
    }

    try {
      const parsedProgress = JSON.parse(savedProgress);
      const fallback = createInitialProgress();

      return {
        currentStep: Math.min(
          Math.max(parsedProgress.currentStep ?? 0, 0),
          roadmapData.length - 1
        ),
        completedSections: {
          ...fallback.completedSections,
          ...parsedProgress.completedSections
        }
      };
    } catch (error) {
      return createInitialProgress();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    
    // Show save indicator
    setShowSaveIndicator(true);
    
    // Clear any existing timeout
    if (saveIndicatorTimeoutRef.current) {
      clearTimeout(saveIndicatorTimeoutRef.current);
    }
    
    // Hide indicator after 2 seconds
    saveIndicatorTimeoutRef.current = setTimeout(() => {
      setShowSaveIndicator(false);
    }, 2000);
    
    return () => {
      if (saveIndicatorTimeoutRef.current) {
        clearTimeout(saveIndicatorTimeoutRef.current);
      }
    };
  }, [progress]);

  const hasShownCelebrationRef = useRef(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showStepMenu, setShowStepMenu] = useState(false);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);
  const stepHeaderRef = useRef(null);
  const stepMenuRef = useRef(null);
  const saveIndicatorTimeoutRef = useRef(null);

  const currentSection = roadmapData[progress.currentStep];
  const currentSectionId = currentSection.id;
  const isCurrentStepCompleted = progress.completedSections[currentSectionId];
  const completedCount = useMemo(
    () => Object.values(progress.completedSections).filter(Boolean).length,
    [progress.completedSections]
  );
  const progressPercentage = Math.round((completedCount / roadmapData.length) * 100);
  const isFirstStep = progress.currentStep === 0;
  const isLastStep = progress.currentStep === roadmapData.length - 1;
  const isAllStepsCompleted = completedCount === roadmapData.length;

  const scrollToStepHeader = () => {
    window.requestAnimationFrame(() => {
      stepHeaderRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  const handleGoToStep = (stepIndex) => {
    setProgress((previous) => ({
      ...previous,
      currentStep: stepIndex
    }));
    scrollToStepHeader();
  };

  const handleNext = () => {
    if (!isCurrentStepCompleted || isLastStep) {
      return;
    }

    handleGoToStep(progress.currentStep + 1);
  };

  const handlePrevious = () => {
    if (isFirstStep) {
      return;
    }

    handleGoToStep(progress.currentStep - 1);
  };

  const handleCompletionToggle = (sectionId, isCompleted) => {
    setProgress((previous) => {
      const updatedCompletedSections = {
        ...previous.completedSections,
        [sectionId]: isCompleted
      };

      const furthestCompletedStep = roadmapData.reduce((furthestIndex, section, index) => {
        if (updatedCompletedSections[section.id]) {
          return index;
        }

        return furthestIndex;
      }, -1);

      const nextAvailableStep = Math.min(
        Math.max(previous.currentStep, furthestCompletedStep + 1),
        roadmapData.length - 1
      );

      return {
        currentStep: isCompleted && previous.currentStep === roadmapData.findIndex((section) => section.id === sectionId)
          ? Math.min(previous.currentStep, nextAvailableStep)
          : previous.currentStep,
        completedSections: updatedCompletedSections
      };
    });
  };

  useEffect(() => {
    if (isAllStepsCompleted && !hasShownCelebrationRef.current) {
      hasShownCelebrationRef.current = true;
      setShowCelebration(true);

      const timeoutId = window.setTimeout(() => {
        setShowCelebration(false);
      }, 3200);

      return () => window.clearTimeout(timeoutId);
    }

    if (!isAllStepsCompleted) {
      hasShownCelebrationRef.current = false;
      setShowCelebration(false);
    }

    return undefined;
  }, [isAllStepsCompleted]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't trigger if user is typing in an input
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      if (event.key === 'ArrowRight' && isCurrentStepCompleted && !isLastStep) {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft' && !isFirstStep) {
        event.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCurrentStepCompleted, isFirstStep, isLastStep]);

  // Close step menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stepMenuRef.current && !stepMenuRef.current.contains(event.target)) {
        setShowStepMenu(false);
      }
    };

    if (showStepMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showStepMenu]);

  const handleResetProgress = () => {
    const resetProgress = createInitialProgress();
    hasShownCelebrationRef.current = false;
    setShowCelebration(false);
    setProgress(resetProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resetProgress));
    scrollToStepHeader();
  };

  const handleCloseCelebration = () => {
    setShowCelebration(false);
  };

  return (
    <div className="app">
      {showCelebration && (
        <div
          className="celebration-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Roadmap completed"
          onClick={handleCloseCelebration}
        >
          <div className="fireworks-layer" aria-hidden="true">
            <span className="firework firework-one"></span>
            <span className="firework firework-two"></span>
            <span className="firework firework-three"></span>
            <span className="firework firework-four"></span>
            <span className="firework firework-five"></span>
          </div>
          <div className="celebration-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="celebration-close"
              onClick={handleCloseCelebration}
              aria-label="Close celebration popup"
            >
              ×
            </button>
            <div className="celebration-badge">🎆</div>
            <p className="celebration-modal-kicker">Roadmap complete</p>
            <h2 className="celebration-modal-title">You did it!</h2>
            <p className="celebration-modal-copy">
              Every step is complete. Take the win and go build something meaningful in open source.
            </p>
          </div>
        </div>
      )}
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          type="button"
        >
          {theme === 'dark' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <div className="header-content">
          <span className="header-kicker">Progressive learning journey</span>
          <h1 className="main-title">🌐 Open Source Roadmap</h1>
          <p className="main-subtitle">
            Move one focused step at a time, finish each section, and build confidence before advancing.
          </p>
          <p className="main-subtitle">
            Read detailed blogs{' '}
            <a
              href="https://irapandey.medium.com/list/open-source-one-step-at-a-time-697811067478"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="experience-shell">
            <div className="experience-topbar" ref={stepHeaderRef}>
              <h2 className="experience-title">Your Learning Journey</h2>
              <div className="topbar-actions">
                <div className="step-menu-container" ref={stepMenuRef}>
                  <button
                    className="ghost-button step-menu-trigger"
                    onClick={() => setShowStepMenu(!showStepMenu)}
                    type="button"
                    aria-label="Jump to step"
                    aria-expanded={showStepMenu}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    Jump to step
                  </button>
                  {showStepMenu && (
                    <div className="step-menu-dropdown">
                      {roadmapData.map((section, idx) => (
                        <button
                          key={section.id}
                          className={`step-menu-item ${idx === progress.currentStep ? 'active' : ''} ${progress.completedSections[section.id] ? 'completed' : ''}`}
                          onClick={() => {
                            handleGoToStep(idx);
                            setShowStepMenu(false);
                          }}
                          type="button"
                        >
                          <span className="step-menu-number">Step {idx + 1}</span>
                          <span className="step-menu-title">{section.title}</span>
                          {progress.completedSections[section.id] && (
                            <svg className="step-menu-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="ghost-button" onClick={handleResetProgress} type="button">
                  Reset progress
                </button>
              </div>
            </div>

            <ProgressTracker
              sections={roadmapData}
              currentStep={progress.currentStep}
              completedSections={progress.completedSections}
              progressPercentage={progressPercentage}
              onStepSelect={handleGoToStep}
            />

            <div className="step-stage" key={currentSection.id}>
              <SectionCard
                section={currentSection}
                index={progress.currentStep}
                isOpen={true}
                isCompleted={isCurrentStepCompleted}
                onCompletionToggle={handleCompletionToggle}
              />
            </div>

            <div className="navigation-panel">
              <button
                className="nav-button secondary"
                onClick={handlePrevious}
                disabled={isFirstStep}
                type="button"
              >
                Previous
              </button>

              <div className="navigation-hint">
                {isCurrentStepCompleted ? (
                  <span className="status-pill completed">Step completed</span>
                ) : (
                  <span className="status-pill pending">Complete this step to continue</span>
                )}
              </div>

              <button
                className="nav-button primary"
                onClick={isAllStepsCompleted ? handleResetProgress : handleNext}
                disabled={!isCurrentStepCompleted || (isLastStep && !isAllStepsCompleted)}
                type="button"
              >
                {isAllStepsCompleted ? 'Reset Progress' : isLastStep ? 'Journey complete' : 'Next step'}
              </button>
            </div>
          </section>
        </div>
      </main>

      {showSaveIndicator && (
        <div className="save-indicator" role="status" aria-live="polite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Progress saved
        </div>
      )}

      <footer className="app-footer">
        <p>Keep Learning, Keep Contributing</p>
        <p>Special Mentions to IBM BOB</p>
      </footer>
    </div>
  );
}

export default App;

// Made with Bob
