import React from 'react';
import styled from 'styled-components';

// Styled component for modal background
const ModalBackground = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')}; /* Show or hide based on state */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  z-index: 1000;
`;

// Styled component for modal content
const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  border-radius: 8px;
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

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

const MailchimpForm = ({ show, onClose }) => {
  return (
    <ModalBackground show={show}>
      <ModalContent>
        <h1>Fill in the form to secure your spot</h1>
        <form
          action="https://acetemple.us16.list-manage.com/subscribe/post?u=9a2533ed7418a68b40bc24d2f&amp;id=8a47b5d2bd&amp;f_id=009f7be0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          {/* Mailchimp form fields */}
          <div>
            <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label>
            <input type="text" name="FNAME" className="required" id="mce-FNAME" required />
          </div>
          <div>
            <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label>
            <input type="text" name="LNAME" className="required" id="mce-LNAME" required />
          </div>
          <div>
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
          </div>
          {/* Other form fields */}
          <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">Save your spot now</Button>
        </form>
        <Button onClick={onClose}>Close</Button>
      </ModalContent>
    </ModalBackground>
  );
};

export default MailchimpForm;
