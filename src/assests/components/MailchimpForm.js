import React, { useState } from 'react';
import styled from 'styled-components';

// Button styles
const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

// Form container styles
const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const MailchimpForm = () => {
  // State to control form visibility
  const [formVisible, setFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'https://calendly.com/acetemple/consultation';
  };

  return (
    <div>
      {/* Button to reveal the form */}
      <Button onClick={toggleFormVisibility}>
        {formVisible ? 'Hide Form' : 'Reveal Form'}
      </Button>

      {/* Conditional rendering of the form */}
      {formVisible && (
        <FormContainer id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css">
            {`
              #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;}
            `}
          </style>
          <div id="mc_embed_signup">
            <form
              action="https://acetemple.us16.list-manage.com/subscribe/post?u=9a2533ed7418a68b40bc24d2f&amp;id=8a47b5d2bd&amp;f_id=009f7be0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div id="mc_embed_signup_scroll">
                <h1>Fill in the form to secure your spot</h1>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">First Name</label>
                  <input type="text" name="FNAME" id="mce-FNAME" />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Last Name</label>
                  <input type="text" name="LNAME" id="mce-LNAME" />
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-MMERGE3-month">Birthday</label>
                  <div className="datefield">
                    <span className="subfield dayfield">
                      <input className="birthday REQ_CSS" type="text" pattern="[0-9]*" placeholder="DD" size="2" maxLength="2" name="MMERGE3[day]" id="mce-MMERGE3-day" />
                    </span> /
                    <span className="subfield monthfield">
                      <input className="birthday REQ_CSS" type="text" pattern="[0-9]*" placeholder="MM" size="2" maxLength="2" name="MMERGE3[month]" id="mce-MMERGE3-month" />
                    </span>
                    <span className="small-meta nowrap">( dd / mm )</span>
                  </div>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_9a2533ed7418a68b40bc24d2f_8a47b5d2bd" tabIndex="-1" />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">Save your spot now</Button>
                    <p style={{ margin: '0px auto' }}>
                      <a href="http://eepurl.com/iT9lpg" title="Mailchimp - email marketing made easy and fun">
                        <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                          <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
          <script type="text/javascript">{`
            (function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0] = 'EMAIL';
              ftypes[0] = 'email';
              fnames[1] = 'FNAME';
              ftypes[1] = 'text';
              fnames[2] = 'LNAME';
              ftypes[2] = 'text';
              fnames[3] = 'MMERGE3';
              ftypes[3] = 'birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `}</script>
        </FormContainer>
      )}
    </div>
  );
};

export default MailchimpForm;
