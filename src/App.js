import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './assests/components/pages/Landing'; // Adjust the path if necessary
import './index.css';
import ThankYou from './assests/components/pages/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Thankyou" element={<ThankYou />} />
        
      </Routes>
    </Router>
  );
};

export default App;
