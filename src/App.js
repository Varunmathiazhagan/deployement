import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SocialBuzz from './components/SocialBuzz';
import Chatbot from './components/Chatbot';
import Analysis from './components/Analysis';
import TwitterEngagement from './components/TwitterEngagement';
import YoutubeDashboard from './components/YoutubeDashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Social Media Dashboard Analyzer</h1>
            <nav>
              <ul className="flex justify-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className={`text-xl font-semibold hover:text-yellow-300 transition-colors ${
                      currentPage === 'Dashboard' ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => setCurrentPage('Dashboard')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analysis"
                    className={`text-xl font-semibold hover:text-yellow-300 transition-colors ${
                      currentPage === 'Analysis' ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => setCurrentPage('Analysis')}
                  >
                    Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-buzz"
                    className={`text-xl font-semibold hover:text-yellow-300 transition-colors ${
                      currentPage === 'SocialBuzz' ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => setCurrentPage('SocialBuzz')}
                  >
                    Social Buzz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chatbot"
                    className={`text-xl font-semibold hover:text-yellow-300 transition-colors ${
                      currentPage === 'Chatbot' ? 'text-yellow-300' : ''
                    }`}
                    onClick={() => setCurrentPage('Chatbot')}
                  >
                    Ask AI
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/social-buzz" element={<SocialBuzz />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/twitter-engagement" element={<TwitterEngagement />} />
            <Route path="/youtube-dashboard" element={<YoutubeDashboard />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Social Media Dashboard Analyzer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;