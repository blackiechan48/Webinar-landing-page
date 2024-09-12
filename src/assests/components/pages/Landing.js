import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import About from '../About'; // Import the About component
import MailchimpForm from '../MailchimpForm'; // Import the Mailchimp form component
import Header from '../Header';
import Footer from '../Footer';

// Define shake animation
const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-10px);
  }
  40%, 80% {
    transform: translateX(10px);
  }
`;

// Styled button with shake animation
const ShakeButton = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  animation: ${shake} 3s infinite;
  text-align: center;

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px 16px;
  }
`;

// Main Landing page component
const Landing = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Header />
      <ShakeButton onClick={handleOpenModal}>
        <div>Main Text</div>
        <small>Subtext goes here</small>
      </ShakeButton>
      <About />

      {/* Button at the top after About component */}
    

      {/* Display the Mailchimp form as a modal */}
      <MailchimpForm show={isModalOpen} onClose={handleCloseModal} />

      {/* Add other components and content */}
      {/* Optional: Add more content here */}
      
      {/* Button at the bottom of the page */}
      <ShakeButton onClick={handleOpenModal}>
        <div>Main Text</div>
        <small>Subtext goes here</small>
      </ShakeButton>

      <Footer />
    </>
  );
};

export default Landing;
