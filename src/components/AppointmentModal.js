import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
 // Import the dedicated CSS file for the modal

const AppointmentModal = ({ isOpen, onClose }) => {
  const [state, handleSubmit, reset] = useForm("meolvqnv");
  // If the modal is not open, don't render anything
  if (!isOpen) return null;
  const handleClose = () => {
    reset(); // reset the form state
    onClose(); // close the modal
  };
  if (state.succeeded) {
    return <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <p>Thanks for joining!</p>
      <button style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "1.5rem", // larger × icon
  }} onClick={handleClose}>Close</button>
    </div>
  </div>;
  }
  return (
    // Modal Overlay: Fixed position, covers the whole screen, semi-transparent background
    // Clicking the overlay closes the modal
    <div
      className="modal-overlay"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content Container: Prevents closing when clicking inside the modal */}
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close"
        >
          &times; {/* HTML entity for multiplication sign, often used as a close icon */}
        </button>

        {/* Left Section: Contact Info Form */}
        <div className="contact-form-section">
          <h2 className="contact-form-title">
            Appointment Form
          </h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-input"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                placeholder="Notes"
                rows="4"
                className="form-input form-textarea"
              ></textarea>
              <ValidationError prefix="Notes" field="notes" errors={state.errors} />
            </div>

            <button type="submit" className="finish-button" disabled={state.submitting}>
              Book Appointment
            </button>
          </form>
        </div>

        {/* Right Section: Schedule an Appointment Info */}
        <div className="appointment-info-section">
          {/* Calendar Icon (simple SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="calendar-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="info-heading">
            Schedule an appointment
          </h3>
          <p className="info-description">
            Fill this form to set up an appointment with us to get
            the best insurance solution.
          </p>
          <p className="contact-detail">
          <a style={{ textDecoration: "none", color: "#5D2A8E" }} href="tel:+491234567890">+91 6364 635 943</a>
          </p>
          <p className="contact-detail">
          prestine.clinic@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
