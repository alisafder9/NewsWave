import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import News from './components/News';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <p className="container my-4">hello</p>
        <Routes>
          <Route exact path="/" element={<News category="top" />} />
          <Route exact path="/sports" element={<News category="sports" />} />
          <Route exact path="/technology" element={<News category="technology" />} />
          <Route exact path="/business" element={<News category="business" />} />
          <Route exact path="/science" element={<News category="science" />} />
          <Route exact path="/entertainment" element={<News category="entertainment" />} />
          <Route exact path="/health" element={<News category="health" />} />
          <Route exact path="/world" element={<News category="world" />} />
          <Route exact path="/politics" element={<News category="politics" />} />
          <Route exact path="/environment" element={<News category="environment" />} />
          <Route exact path="/food" element={<News category="food" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
