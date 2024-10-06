import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ResumePage from './pages/ResumePage';

import Bot from './pages/BotPage';
import MachineLearning from './pages/MachineLearningPage';
import GameEngine from './pages/GameEnginePage';
import Projects from './pages/ProjectsPage';

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

            <Route path="/chat-bot" component={Bot} />
            <Route path="/machine-learning" component={MachineLearning} />
            <Route path="/game-engine" component={GameEngine} />
            <Route path="/projects" component={Projects} /> 
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
