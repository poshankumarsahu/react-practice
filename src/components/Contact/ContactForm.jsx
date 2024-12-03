import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message!\nEmail: ${email}\nMessage: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;