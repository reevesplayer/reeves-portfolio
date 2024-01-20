import React from 'react';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import useDarkMode from 'use-dark-mode';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider>
      <main className={`text-foreground bg-background ${darkMode.value ? 'darkmode' : 'lightmode'}`}>
        <NavBar />
        <HomePage />
      </main>
    </NextUIProvider>
  );
}

export default App;
