import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 20px;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-top: 10px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Your Personal Training Business</p>
  </FooterContainer>
);

export default Footer;
