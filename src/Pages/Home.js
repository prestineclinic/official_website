import React, { useState } from 'react';
import aboutImg from '../Images/innerclinic.jpg';
import AppointmentModal from '../components/AppointmentModal';

import physiotherapyImg from '../Images/physiotherapie.jpg';
import osteopathyImg from '../Images/Osteopathy.jpg';
import neuroRehabImg from '../Images/Neuro_Paediatric Rehab.jpg';
import pnfTherapyImg from '../Images/pnf.jpeg';
import pilatesImg from '../Images/pilates.jpg';


import sciaticaImg from '../Images/sciatica.jpg';
import cervicalImg from '../Images/cervical.jpg';
import lowBackImg from '../Images/lower.jpg';
import kneeOsteoImg from '../Images/kneeos.jpg';
import posturalImg from '../Images/posturepain.jpg';
import tennisElbowImg from '../Images/Tennis-Elbow-1.jpg';
import golfersElbowImg from '../Images/Golferellenbogen-5-1024x683.jpeg';
import carpalTunnelImg from '../Images/carper.jpg';
import frozenShoulderImg from '../Images/frozenshoulder.jpg';
import ligamentSprainImg from '../Images/Ligament-injuries-strains.jpeg';
import strokeImg from '../Images/Signs-Symptoms-Stroke.jpg';
import gbsImg from '../Images/gps.jpg';

const servicesData = [
  {
    title: 'Physiotherapy',
    img: physiotherapyImg,
    text: 'Physiotherapy helps restore movement and function after injury or illness through manual therapy, exercises, and education. It aids recovery and improves physical health.'
  },
  {
    title: 'Osteopathy',
    img: osteopathyImg,
    text: 'Osteopathy is a holistic approach to healthcare using hands-on techniques to improve circulation and correct altered biomechanics, treating muscles, joints, and spine.'
  },
  {
    title: 'Neuro / Pediatric Rehab',
    img: neuroRehabImg,
    text: 'Neuro and Pediatric Rehab supports individuals with neurological or developmental conditions through tailored therapy to improve mobility, coordination, and independence.'
  },
  {
    title: 'PNF Therapy',
    img: pnfTherapyImg,
    text: 'PNF (Proprioceptive Neuromuscular Facilitation) Therapy enhances flexibility and strength through specific stretching techniques that activate muscle and nerve pathways.'
  },
  {
    title: 'Pilates',
    img: pilatesImg,
    text: 'Pilates is a low-impact exercise method focusing on core strength, flexibility, and posture. It’s widely used for injury prevention and rehabilitation.'
  }
];


const conditionsData = [
  {
    title: 'Cervical Pain',
    img: cervicalImg,
    text: 'Cervical pain refers to discomfort in the neck area, often caused by poor posture, disc issues, or injuries. Stretching and ergonomic adjustments are common treatments.'
  },
  {
    title: 'Low Back Pain',
    img: lowBackImg,
    text: 'Low back pain is common and may result from strain, poor posture, or underlying conditions. Early care can help prevent chronic discomfort and support recovery.'
  },
  {
    title: 'Knee Osteoarthritis',
    img: kneeOsteoImg,
    text: 'Knee osteoarthritis is the wear and tear of knee cartilage, leading to pain and stiffness. Management includes weight control, physiotherapy, and medications.'
  },
  {
    title: 'Postural Pain',
    img: posturalImg,
    text: 'Postural pain arises from prolonged poor posture, causing tension and discomfort in the back or neck. Improving posture and regular movement are key remedies.'
  },
  {
    title: 'Sciatica',
    img: sciaticaImg,
    text: 'Sciatica causes sharp pain, tingling, or numbness radiating along the sciatic nerve, often due to a herniated disc or spinal stenosis. Treatment includes physical therapy and medications.'
  },
  {
    title: 'Tennis Elbow',
    img: tennisElbowImg,
    text: 'Tennis elbow is caused by overuse of forearm muscles, leading to pain around the elbow. Rest, physical therapy, and braces help in recovery.'
  },
  {
    title: 'Golfer’s Elbow',
    img: golfersElbowImg,
    text: 'Golfer’s elbow involves pain and inflammation on the inner side of the elbow due to repetitive motion. Treatment includes rest, stretching, and strengthening exercises.'
  },
  {
    title: 'Carpal Tunnel Syndrome',
    img: carpalTunnelImg,
    text: 'Carpal Tunnel Syndrome causes numbness and tingling in the hand due to median nerve compression. Wrist splints and ergonomic changes are common interventions.'
  },
  {
    title: 'Frozen Shoulder',
    img: frozenShoulderImg,
    text: 'Frozen shoulder involves stiffness and pain in the shoulder joint, often developing slowly. Treatment includes stretching, physical therapy, and anti-inflammatory meds.'
  },
  {
    title: 'Ligament Sprains',
    img: ligamentSprainImg,
    text: 'Ligament sprains occur when ligaments are overstretched or torn, often due to sports injuries. RICE therapy and physiotherapy aid recovery.'
  },
  {
    title: 'Stroke',
    img: strokeImg,
    text: 'A stroke occurs when blood flow to the brain is interrupted, leading to brain damage. Fast treatment and rehabilitation are crucial for recovery and function.'
  },
  {
    title: 'Guillain-Barré Syndrome',
    img: gbsImg,
    text: 'Guillain-Barré Syndrome is a rare autoimmune disorder where the immune system attacks nerves, causing weakness or paralysis. Prompt medical care is essential.'
  }
];


function CardData({ aboutimg, title, text, cardClass }) {
  const [showMore, setShowMore] = useState(false);
  const shortText = text.slice(0, 130);
  const isLong = text.length > 130;

  return (
    <div className={`condition-card${cardClass ? ' ' + cardClass : ''}`}>
      <img src={aboutimg} alt="icon" className="card-img-top" />
      <h3>{title}</h3>
      <p>
        {showMore ? text : shortText}
        {isLong && (
          <>
            {!showMore && '...'}
            <a href="#" className="learn-more-link" onClick={e => { e.preventDefault(); setShowMore(!showMore); }}>
              {showMore ? 'Show less' : 'Show more'}
            </a>
          </>
        )}
      </p>
    </div>
  );
}

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
        {/* About Us Section */}
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
    <div className="container">
        {/* Conditions Section (First) */}
        <section className="conditions-section">
          <h2>Conditions</h2>
          <p>We treat a wide range of conditions, from everyday aches </p>
          <p>and postural pain to complex neurological and sports injuries.</p>
            <div className="conditions-grid">
            {conditionsData.map((cond, idx) => (
              <CardData key={idx} aboutimg={cond.img} title={cond.title} text={cond.text} />
            ))}
          </div>
        </section>

        {/* Services Section (Second, repeated) */}
        <section className="conditions-section services-section">
          <h2>Our Services</h2>
          <p>We provide one-on-one focused attention to our</p>
          <p>patients to take control of their pain, and life.</p>
          <div className="conditions-grid">
            {servicesData.slice(0, 6).map((serv, idx) => (
              <CardData key={"service-" + idx} aboutimg={serv.img} title={serv.title} text={serv.text} cardClass="service-card" />
            ))}
          </div>
        </section>
      </div>
      {/* Appointment Section - outside container for full width */}
      <section className="appointment-section">
        <div>
          <h1>Wanna Book Appointment?</h1>
          <p>Click on the button below to schedule appointment</p>
          <button onClick={handleOpenModal} className="appointment-btn">Get an Appointment</button>
        </div>
      </section>
            <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Home; 