// CustomScrollbar.js
import React from 'react';

const CustomScrollbar = () => {
  return (
    <div className="scroll-container overflow-y-scroll h-screen relative">
      {/* Your content goes here */}
      <p>Your content...</p>

      {/* Strongman riding a rocket illustration */}
      <div className="strongman-rocket absolute bottom-0 right-5">
        <img src="/strongman-rocket.png" alt="Strongman riding a rocket" className="w-12 h-20" />
      </div>
    </div>
  );
};

export default CustomScrollbar;
