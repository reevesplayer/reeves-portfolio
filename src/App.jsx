import React from 'react';
import HomePage from './pages/HomePage';
import TopBar from './components/TopBar';
import useDarkMode from 'use-dark-mode';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider>
      <main className={`text-foreground bg-background ${darkMode.value ? 'darkmode' : 'lightmode'}`}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
          <TopBar />
        </div>
        <HomePage />
      </main>
    </NextUIProvider>
  );
}

export default App;
