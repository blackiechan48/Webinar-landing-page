import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Styled component for the image box
const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 16/9; 
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border: none;
  }
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
  text-align: center;
`;

// Styled component for the subtitle
const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

// Styled component for the text content
const TextContent = styled.div`
  font-size: 1em;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

// New VideoPage component
const VideoPage = () => {
  return (
    <PageContainer>
     
      <ImageBox>
        
        <img 
          src="/hurray1.jpg" 
          alt="Thank you" 
        />
      </ImageBox>

      
      <Title>YOU'RE IN! HURRAY!!</Title>
      <Subtitle>Thank you, Your seat has been reserved and I look forward to seeing you.</Subtitle>
      <TextContent>
        <p>
          Check your email (the one used during registration) and make sure that you received a registration confirmation, 
          it does take about 10 mins for the email to arrive! (Please check your junk/ spam folder!)
        </p>
        
      </TextContent>
          
    </PageContainer>
  );
};

export default VideoPage;
