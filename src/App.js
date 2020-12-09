import React from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import NavBar from './components/common/navBar.jsx';
import Home from './components/home';

const App = () => {
  // Returns a string: 'en' or 'es'
  // If 'es' render site in Spanish -- all others in English
  const lang = detectBrowserLanguage().split('-')[0];

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <NavBar />
      <Home lang={lang} />
    </div>
  );
};

export default App;
