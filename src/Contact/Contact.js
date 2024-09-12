import React from 'react';
import './Contact.css';

const Contact = () => {


    return (
        <div className="Contact">
            <hr className='line' />
            <h3 className='ContactText'>Contact</h3>
            <div className="contact-item">
                <span className="icon">📍</span>
                <span>Manchester</span>
            </div>
            <div className="contact-item">
                <span className="icon">✉️</span>
                <span>bansikhokhani27@gmail.com</span>
            </div>
            <div className="contact-item">
                <span className="icon">📞</span>
                <span>07442071653</span>
            </div>
        </div>
    );
};

export default Contact;
