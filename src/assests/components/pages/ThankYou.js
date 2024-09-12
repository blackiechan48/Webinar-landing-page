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

// Styled component for the video box
const VideoBox = styled.div`
  width: 100%;
  aspect-ratio: 16/9; /* Maintains a 16:9 aspect ratio for the video */
  margin-bottom: 20px;

  iframe, video {
    width: 100%;
    height: 100%;
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
      {/* Video Box with iframe for embedding a video */}
      <VideoBox>
        {/* Replace the src with your video URL or embed code */}
        <iframe 
          src="https://www.youtube.com/watch?v=1u2kFqzC7ko" 
          title="Thank you "
          allowFullScreen
        ></iframe>
      </VideoBox>

      {/* Title, Subtitle, and Text Content */}
      <Title>YOU'RE IN! HURRAY!!</Title>
      <Subtitle>Thank you, Your seat has been reserved and i look forward to seeing you.</Subtitle>
      <TextContent>
        <p>
          Join us for an in-depth session where we'll dive into proven strategies for transforming your life. Whether you're looking to lose weight, build strength, or simply feel more confident in your skin, this webinar is for you.
        </p>
        <p>
          Our expert coaches have helped countless individuals achieve their goals, and now it's your turn. Don't miss out on this opportunity to learn, grow, and become the best version of yourself.
        </p>
      </TextContent>
    </PageContainer>
  );
};

export default VideoPage;
