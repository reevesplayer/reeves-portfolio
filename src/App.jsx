// App.jsx

import React from 'react';
import HomePage from './pages/HomePage';
import TopBar from './components/TopBar';
import useDarkMode from 'use-dark-mode';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';

function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider>
      <Router>
        <div className={`text-foreground bg-background ${darkMode.value ? 'darkmode' : 'lightmode'}`}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
            <TopBar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
