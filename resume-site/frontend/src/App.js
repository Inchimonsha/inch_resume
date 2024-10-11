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
        <header className="App-header">
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/resume" element={<ResumePage />} />

            <Route path="/chat-bot" element={<BotPage />} />
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/game-engine" element={<GameEnginePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
