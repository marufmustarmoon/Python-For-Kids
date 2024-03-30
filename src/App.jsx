import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LiveCoding from './pages/LiveCoding';
import { Link } from 'react-router-dom';
import Tutorial from './pages/Tutorial';
import Quiz from './pages/Quiz';

function App() {
  return (
    <>
      <BrowserRouter>
      <nav style={{ padding: '10px', marginBottom: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>Homepage</Link>
        </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/live-coding" element={<LiveCoding />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
