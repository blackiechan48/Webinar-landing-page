import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MailchimpForm from './MailchimpForm'; // Import the MailchimpForm component

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const SectionContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background-image: url('your-background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 400px;

  @media (max-width: 768px) {
    padding: 10px;
    height: 300px;
  }
`;

const TextBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
  max-width: 40%;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
    left: 10px;
    padding: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  animation: ${shake} 0.5s ease-in-out infinite;

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const Section = () => {
  const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <SectionContainer>
        <TextBox>
          <h2>Your Expertise</h2>
          <p>
            Brief introduction about your expertise and the benefits of your training.
            Discover proven techniques to achieve your fitness goals!
          </p>
          {/* Button at the bottom of the text box */}
          <Button onClick={togglePopup}>
            Learn More
          </Button>
        </TextBox>
      </SectionContainer>

      {/* Buttons positioned at top, middle, and bottom of the page */}
      <Button onClick={togglePopup}>Top Button</Button>
      <Button onClick={togglePopup}>Middle Button</Button>
      <Button onClick={togglePopup}>Bottom Button</Button>

      {/* Mailchimp Form Popup */}
      <MailchimpForm show={isPopupVisible} onClose={togglePopup} />
    </>
  );
};

export default Section;
