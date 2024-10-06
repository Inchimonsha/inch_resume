import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

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
