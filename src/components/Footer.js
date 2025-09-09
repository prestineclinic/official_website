import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* About Us Section */}
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
          Our clinic offers expert physiotherapy, osteopathy, neuro and pediatric rehab, PNF therapy, and Pilates. Our skilled team provides
          personalized care in a supportive and professional environment.
          
          <br/>Packages are NOT <b>refundable</b>
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="footer-col">
          <h3>Contact us</h3>
          <p>
          No 50 hig, KHB Colony, Koramangala<br />
          8th Block, Koramangala,<br />
          Bengaluru, Karnataka
          560095
          </p>
          <div className="footer-phones">
            <div><a style={{ textDecoration: "none", color: "white" }} href="tel:+491234567890">+91 6364 635 943</a></div>
            <div>prestine.clinic@gmail.com</div>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-col">
          <h3>Find Us</h3>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1314822303227!2d77.61743457523414!3d12.938162497176236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d1aa0bba63%3A0xa1ea9066af4c3133!2sPristine%20physiotherapy%20clinic!5e0!3m2!1sde!2sde!4v1757101640954!5m2!1sde!2sde"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © All rights reserved Pristine
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook" className="footer-social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect width="22" height="22" fill="#fff" />
              <path d="M15.117 8.667h-1.05V7.8c0-.252.168-.31.286-.31h.75V5.5h-1.03c-1.14 0-1.48.85-1.48 1.4v1.767h-1.05v1.833h1.05V18.5h2.02v-7.999h1.05l.17-1.834z" fill="#e53935" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="footer-social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect width="22" height="22" fill="#fff" />
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke="#e53935" strokeWidth="1.5" />
              <rect x="7" y="7" width="10" height="10" rx="5" stroke="#e53935" strokeWidth="1.5" />
              <circle cx="16.5" cy="7.5" r="1" fill="#e53935" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
