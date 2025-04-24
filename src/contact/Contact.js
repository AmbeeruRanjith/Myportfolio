import React from 'react';
import { Linkedin, Mail, Github, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactData = [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ranjith-ambeeru321766252',
      link: 'https://www.linkedin.com/in/ranjith-ambeeru-321766252/',
      icon: <Linkedin />
    },
    {
      label: 'Email',
      value: 'ranjithambeeru21@gmail.com',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
      icon: <Mail />
    },
    {
      label: 'GitHub',
      value: 'github.com/AmbeeruRanjith',
      link: 'https://github.com/AmbeeruRanjith',
      icon: <Github />
    },
    {
      label: 'Mobile',
      value: '+91 8688493306',
      link: 'tel:+918688493306',
      icon: <Phone />
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT</h2>
        <div className="contact-grid">
          {contactData.map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="icon-wrapper">
                {contact.icon}
              </div>
              <div className="contact-info">
                <div className="contact-label">{contact.label}</div>
                <div className="contact-value">
                  <a href={contact.link} target={contact.label !== 'Mobile' ? '_blank' : undefined} rel="noopener noreferrer">
                    {contact.value}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;