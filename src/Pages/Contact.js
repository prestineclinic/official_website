import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
// Don't forget to import your CSS file if it's separate
// import './ContactUs.css';

function ContactUs() {
  const [state, handleSubmit, reset] = useForm("meolvqnv");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true); // show message
  
      const timer = setTimeout(() => {
        setShowMessage(false);
        const form = document.querySelector(".contact-form");
        if (form) form.reset(); // resets HTML inputs
        reset(); // resets Formspree state
      }, 3000);
      
      return () => clearTimeout(timer); // cleanup if component unmounts
    }
  }, [state.succeeded, reset]);

  return (
    <section className="contact-us-section">
      <div className="contact-header">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="title-underline"></div>
        <p className="contact-description">
          To book an appointment, please fill out the form below or visit us at our clinic address.
        </p>
      </div>

      <div className="contact-content-row">
        {/* Left Column: Contact Form */}
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-heading">Appointment Form</h3>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="e.g., +1 234 567 8900" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea id="notes" name="notes" rows="5" placeholder="Leave your message here..."></textarea>
            </div>

            <button type="submit" className="submit-button">Get Appointment</button>
          </form>
          {showMessage && (
            <div>
              <p style={{color: 'green'}}>Appointment Booked Successfully, We will see you soon!</p>
            </div>
          )}
        </div>

        {/* Right Column: Map */}
        <div className="contact-map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1314822303227!2d77.61743457523414!3d12.938162497176236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d1aa0bba63%3A0xa1ea9066af4c3133!2sPristine%20physiotherapy%20clinic!5e0!3m2!1sde!2sde!4v1757101640954!5m2!1sde!2sde" // Updated for a more reliable Google Maps embed
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <div className="map-overlay-text">
            <p>Manhattan</p>
            <p>New York, NY, USA</p>
            <a href="https://maps.app.goo.gl/X6yLj491oM27uxEz6" target="_blank" rel="noopener noreferrer" className="view-larger-map">View larger map</a>
          </div> */}
          {/* Zoom controls and Google logo are part of the iframe, not separate elements on a real embed. */}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;