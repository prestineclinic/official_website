import React, { useState } from 'react';
// Assuming about-img.jpg is in the same directory as App.js or accessible path
import aboutImg from '../Images/innerclinic.jpg';
import AppointmentModal from '../components/AppointmentModal';
// You will create App.css in the same directory and import it

// About Us Component (as provided by you, with minor adjustments for image path)
function About({handleOpenModal}) {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
        Our clinic offers comprehensive care in a welcoming and supportive environment,
        where patients feel motivated and cared for. With a skilled team of physiotherapists 
        and rehabilitation specialists, we provide services such as physiotherapy, osteopathy, and Pilates.
        </p>
        <p>
        We treat a wide range of conditions, including neck and back pain, joint issues, postural
        discomfort, sciatica, sports injuries, and neurological conditions like stroke and Guillain-Barré Syndrome. 
        Focused on individualized care, our team combines advanced techniques with a compassionate approach 
        to restore mobility, relieve pain, and help patients achieve long-term health and improved quality of life.
        </p>
        {/* <button
          onClick={handleOpenModal}
          className="our-gallery-button"
        >
          Schedule Appointment
        </button> */}
      </div>
      <div className="about-us-image">
        <img src={aboutImg} alt="The Osteorehab Team" />
      </div>
    </section>
  );
}

// New Reviews Component
function Reviews() {
  // Placeholder data for reviews. In a real app, this might come from an API.
  const reviewsData = [
    {
      type: 'review',
      quote: "The clinic staff is extremely professional and friendly. My physiotherapy sessions have been very effective and comfortable.",
      author: "Arjun Mehta",
      avatar: "https://placehold.co/40x40/E0E0E0/333333?text=AM",
      link: "#"
    },
    {
      type: 'review',
      quote: "I was impressed with the personalized care here. The team helped me recover from my back pain faster than I expected.",
      author: "Priya Sharma",
      avatar: "https://placehold.co/40x40/E0E0E0/333333?text=PS",
      link: "#"
    },
    {
      type: 'badge',
      title: "Social reviews",
      heading: "Boost Conversion",
      description: "Use Repuso! Create your first widget now!"
    },
    {
      type: 'review',
      quote: "Highly recommend this clinic! The therapists are knowledgeable, and the atmosphere is very supportive.",
      author: "Rohan Kapoor",
      avatar: "https://placehold.co/40x40/E0E0E0/333333?text=RK",
      link: "#"
    },
    {
      type: 'review',
      quote: "I loved how they tailored my rehab program. Every session felt effective, and the staff is very caring.",
      author: "Sneha Iyer",
      avatar: "https://placehold.co/40x40/E0E0E0/333333?text=SI",
      link: "#"
    },
    {
      type: 'review',
      quote: "Excellent clinic! The team made me feel comfortable, and my recovery from sports injury was smooth and fast.",
      author: "Vikram Singh",
      avatar: "https://placehold.co/40x40/E0E0E0/333333?text=VS",
      link: "#"
    },
];

  return (
    <section className="reviews-section">
      <div className="reviews-grid">
        {reviewsData.map((item, index) => (
          item.type === 'review' ? (
            <div className="review-card" key={index}>
              <span className="quote-icon">“</span>
              <p className="review-text">{item.quote}</p>
              <div className="reviewer-info">
                <span className="reviewer-name">{item.author}</span>
                {item.avatar && <img src={item.avatar} alt={`${item.author} avatar`} className="reviewer-avatar" />}
              </div>
            </div>
          ) : (
            <div className="review-badge-card" key={index}>
              <p className="badge-title">{item.title}</p>
              <div className="badge-icon-container">
                {/* Simple SVG for the laurel wreath icon */}
                <svg className="laurel-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14h4v2h-4zm-4 4h12v2H6zm-2 4h16v2H4zm2 4h12v2H6z" fill="none"/>
                  <path d="M12 1L9 4l3 3 3-3-3-3zm-6 3l-3 3 3 3 3-3-3-3zm12 0l3 3-3 3-3-3 3-3zm-9 9l-3 3 3 3 3-3-3-3zm6 0l3 3-3 3-3-3 3-3z"/>
                </svg>
                <svg className="laurel-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14h4v2h-4zm-4 4h12v2H6zm-2 4h16v2H4zm2 4h12v2H6z" fill="none"/>
                  <path d="M12 1L9 4l3 3 3-3-3-3zm-6 3l-3 3 3 3 3-3-3-3zm12 0l3 3-3 3-3-3 3-3zm-9 9l-3 3 3 3 3-3-3-3zm6 0l3 3-3 3-3-3 3-3z"/>
                </svg>
              </div>
              <h3 className="badge-heading">{item.heading}</h3>
              <p className="badge-description">{item.description}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
}

// Main App Component
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <About handleOpenModal={handleOpenModal}/>
      <Reviews />
      <section className="appointment-section">
        <div>
          <h1>Wanna Book Appointment?</h1>
          <p>Click on the button below to schedule appointment</p>
          <button onClick={handleOpenModal} className="appointment-btn">Get an Appointment</button>
        </div>
      </section>
      {/* Render the AppointmentModal, passing its state and close handler */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
