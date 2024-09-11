import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  background:black;
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 200px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 10px;
    width: 100%;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 150px;
    margin-bottom: 10px;
  }
`;

const TestimonialText = styled.p`
  flex: 1;
  color: yellow;
`;

const Testimonials = () => (
  <>
    <h2>Testimonials</h2>
    <TestimonialsContainer>
      <Testimonial>
        <TestimonialImage src="IMG_4658.JPG" alt="Transformation 1" />
        <TestimonialText>This is the best thing I have done</TestimonialText>
      </Testimonial>
      <Testimonial>
        <TestimonialImage src="IMG_5661CAFE0067-1.jpeg" alt="Transformation 2" />
        <TestimonialText>Very effective and easy process, and I love working out now</TestimonialText>
      </Testimonial>
    </TestimonialsContainer>
  </>
);

export default Testimonials;
