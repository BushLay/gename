import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import { About, Privacy } from './pages/StaticPages';
import { preloadNameData } from './utils/nameGenerator';

function App() {
  // Preload name data on app initialization to avoid slow first generation
  useEffect(() => {
    preloadNameData();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
