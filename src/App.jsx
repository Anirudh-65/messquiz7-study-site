import React, { useState } from 'react';
import { BookOpen, HelpCircle, ExternalLink } from 'lucide-react';
import StudyGuide from './StudyGuide';
import Quiz from './Quiz';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('study');

  return (
    <div className="app-container">
      <header className="header bg-surface border-subtle">
        <div className="header-content container">
          <div className="logo">
            <span className="logo-icon">M7</span>
            <span className="logo-text">Mess<span className="text-accent">Quiz7</span></span>
          </div>
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'study' ? 'active' : ''}`}
              onClick={() => setActiveTab('study')}
            >
              <BookOpen size={18} />
              Study Guide
            </button>
            <button 
              className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
            >
              <HelpCircle size={18} />
              Quiz
            </button>
          </nav>
          <a href="https://github.com/Anirudh-65" target="_blank" rel="noopener noreferrer" className="github-link">
            <ExternalLink size={20} />
            <span>Anirudh-65</span>
          </a>
        </div>
      </header>

      <main className="main-content container animate-fade-in">
        {activeTab === 'study' ? <StudyGuide /> : <Quiz />}
      </main>

      <footer className="footer bg-surface border-subtle">
        <div className="container">
          <p>Created for quick exam prep. Good luck!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
