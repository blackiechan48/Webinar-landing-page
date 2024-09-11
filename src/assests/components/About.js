import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const TextContainer = styled.div`
  background-color: yellow;
  flex: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContent = styled.div`
  color: black;
  font-size: 1.2em;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const About = ({ imageSrc, altText }) => (
  <Container>
    <TextContainer>
      <TextContent>
        <Title>Unlock Your Best Self with Expert Guidance</Title>
        <Paragraph>
          Are you ready to transform your life and embrace a happier, sexier, and more confident you? With nearly a decade of experience in training women, I am here to help you achieve the incredible transformation you deserve.
        </Paragraph>
        <Subtitle>Learn how to</Subtitle>
        <List>
          <ListItem><strong> * Shed unwanted fat and feel amazing in your skin</strong> </ListItem>
          <ListItem><strong>* Build strength without spending hours in the gym</strong> </ListItem>
          <ListItem><strong>* Learn the secrets to maintaining your results for life</strong></ListItem>
        </List>
        
        <Paragraph>
          <strong>You deserve to feel incredible—let’s make it happen, together.</strong>
        </Paragraph>
      </TextContent>
    </TextContainer>
  </Container>
);

export default About;
