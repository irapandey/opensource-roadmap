import React, { useState } from 'react';
import SectionCard from './components/SectionCard';
import ProgressTracker from './components/ProgressTracker';
import { roadmapData } from './data/roadmapData';
import './App.css';

function App() {
  const [openSectionId, setOpenSectionId] = useState(1); // First section open by default
  
  // Initialize completion state from localStorage
  const [completedSections, setCompletedSections] = useState(() => {
    const completed = {};
    roadmapData.forEach(section => {
      const saved = localStorage.getItem(`section-${section.id}-completed`);
      completed[section.id] = saved === 'true';
    });
    return completed;
  });

  const handleToggle = (sectionId) => {
    setOpenSectionId(openSectionId === sectionId ? null : sectionId);
  };

  const handleCompletionToggle = (sectionId, isCompleted) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: isCompleted
    }));
    localStorage.setItem(`section-${sectionId}-completed`, isCompleted);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="main-title">🌐 Open Source Roadmap</h1>
          <p className="main-subtitle">
            Your guide to making meaningful contributions to open source projects
           
          </p>
          <p className="main-subtitle"> Read detailed blogs <a href='https://irapandey.medium.com/list/open-source-one-step-at-a-time-697811067478' target="_blank" rel="noopener noreferrer">HERE</a></p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="roadmap-layout">
            <aside className="progress-sidebar">
              <ProgressTracker
                sections={roadmapData}
                openSectionId={openSectionId}
                completedSections={completedSections}
              />
            </aside>

            <div className="roadmap-content">
              {roadmapData.map((section, index) => (
                <SectionCard
                  key={section.id}
                  section={section}
                  index={index}
                  isFirstSection={index === 0}
                  isOpen={openSectionId === section.id}
                  onToggle={handleToggle}
                  isCompleted={completedSections[section.id]}
                  onCompletionToggle={handleCompletionToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Keep Learning, Keep Contributing</p>
        <p>Special Mentions to IBM BOB</p>
      </footer>
    </div>
  );
}

export default App;

// Made with Bob
