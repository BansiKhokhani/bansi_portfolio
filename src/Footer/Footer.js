import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="Footer">
            <hr className='line' />
            <h1 className='Footertext'>Follow Me</h1>
            <div className="link">
                <a
                    href="https://github.com/BansiKhokhani"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{
                        color: '#fff',
                    }}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/bansi-khokhani-583099296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ color: '#0077b5', }}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
               
            </div>
            <h5 className='copyRightText'>© 2024 Bansi khokhani. All rights reserved.</h5>

        </div>
    );
};

export default Contact;
