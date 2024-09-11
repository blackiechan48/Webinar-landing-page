import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Container from '../Container';
import Header from '../Header';
import Section from '../Section';
import MailchimpForm from '../MailchimpForm';
import Footer from '../Footer';
import About from '../About';

// Define shake animation using keyframes
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Button styles with shake animation
const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin: 20px 0;
  animation: ${shake} 0.5s ease-in-out infinite; /* Apply shake animation */
  position: relative;

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

// Subtext inside the button
const SubText = styled.span`
  display: block;
  font-size: 0.8em;
  color: #666;
  margin-top: 5px;
`;

// Popup overlay styles
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Popup content styles
const PopupContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

// Close button styles
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Landing = () => {
  // State to control form visibility
  const [formVisible, setFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <Container>
      {/* Button at the top */}
      <Button onClick={toggleFormVisibility}>
        {formVisible ? 'Hide Form' : 'Reveal Form'}
        <SubText>Click to reveal the form and secure your spot!</SubText>
      </Button>

      <Header />

      {/* Button in the middle */}
      <Section>
        <Button onClick={toggleFormVisibility}>
          {formVisible ? 'Hide Form' : 'Reveal Form'}
          <SubText>Don't miss out! Sign up now!</SubText>
        </Button>
      </Section>

      <About />

      {/* Conditionally render the form as a popup if visible */}
      {formVisible && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={toggleFormVisibility}>&times;</CloseButton>
            <MailchimpForm />
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Button at the bottom */}
      <Button onClick={toggleFormVisibility}>
        {formVisible ? 'Hide Form' : 'Reveal Form'}
        <SubText>Join us today for a transformative experience!</SubText>
      </Button>

      <Footer />
    </Container>
  );
};

export default Landing;
