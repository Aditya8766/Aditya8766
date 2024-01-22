import './contact.scss';
import email from '../../assets/email.gif';
import contact from '../../assets/contact.gif';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '+918766971902';

    const whatsappMessage = `Name: ${formData.firstName} ${formData.lastName}\n Subject: ${formData.subject}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <h1>Contact me</h1>
      <div className="contact-me" id='contact'>
        <div className='contact-me-gif'>
          <img src={email} alt='contactMeGif' />
        </div>
        <div className='contact-form'>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject of Message"
            value={formData.subject}
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Send Message</button>
        </div>
        <div className='contact-me-gif'>
          <img src={contact} alt='contactMeGif' />
        </div>
      </div>
    </>
  );
}

export default Contact;
