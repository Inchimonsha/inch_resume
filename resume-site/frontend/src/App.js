import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ResumePage from './pages/ResumePage';
import { BotPage } from './pages/BotPage';
import { MachineLearningPage } from './pages/MachineLearningPage';
import { GameEnginePage } from './pages/GameEnginePage';
import { ProjectPage } from './pages/ProjectPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/inch_resume/" exact element={<HomePage />} />
            <Route path="/inch_resume/profile" element={<ProfilePage />} />
            <Route path="/inch_resume/resume" element={<ResumePage />} />
            <Route path="/inch_resume/chat-bot" element={<BotPage />} />
            <Route path="/inch_resume/machine-learning" element={<MachineLearningPage />} />
            <Route path="/inch_resume/game-engine" element={<GameEnginePage />} />
            <Route path="/inch_resume/projects" element={<ProjectPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
