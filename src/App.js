import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './assests/components/pages/Landing'; 
import './index.css';
import WebinarConfirmation from './assests/components/pages/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thankyou" element={<WebinarConfirmation />} />
        
      </Routes>
    </Router>
  );
};

export default App;
