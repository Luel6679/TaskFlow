
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import ClientPortal from './views/ClientPortal';
import PosterPortal from './views/PosterPortal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
        {/* Navigation */}
        <nav className="border-b-2 border-black sticky top-0 bg-white z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
              TASKFLOW
            </Link>
            <div className="flex gap-8 text-sm font-medium">
              <Link to="/client" className="hover:underline underline-offset-4">CLIENT</Link>
              <Link to="/poster" className="hover:underline underline-offset-4">POSTER</Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<ClientPortal />} />
            <Route path="/poster" element={<PosterPortal />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-black py-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>© 2024 TASKFLOW. NO TRACKING. NO ADS.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">TERMS</a>
              <a href="#" className="hover:underline">PRIVACY</a>
              <a href="#" className="hover:underline">CONTACT</a>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
