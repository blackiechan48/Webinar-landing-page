import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: left;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  color: yellow;
  font-size: 2.5em;
  margin: 0;
  background: black;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const SubTitle = styled.p`
  color: #666;
  font-size: 1.2em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>GET YOUR BODY RIGHT, UNLOCK YOUR FAT LOSS </Title>
    <SubTitle>Learn the technique I have used to get clients result for the past 10 years</SubTitle>
  </HeaderContainer>
);

export default Header;
