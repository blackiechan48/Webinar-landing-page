import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define shake animation using keyframes for the button
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Styled component for the section container with a background image
const SectionContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background-image: url('your-background-image.jpg'); /* Set your background image here */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 400px; /* Set a fixed height for visual effect */

  @media (max-width: 768px) {
    padding: 10px;
    height: 300px; /* Adjust height for smaller screens */
  }
`;

// Styled component for the text box
const TextBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
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

// Button styles with shake animation
const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  animation: ${shake} 0.5s ease-in-out infinite; /* Apply shake animation */

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const Section = () => (
  <SectionContainer>
    <TextBox>
      <h2>Your Expertise</h2>
      <p>
        Brief introduction about your expertise and the benefits of your training.
        Discover proven techniques to achieve your fitness goals!
      </p>
      {/* Button at the bottom of the text box */}
      <Button>
        Learn More
      </Button>
    </TextBox>
  </SectionContainer>
);

export default Section;
