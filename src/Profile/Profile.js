import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilePicture from '../assets/profile/profilePicture.jpg'



const Profile = () => {

  return (
    <div className="profile">
      <div>
        <img
          src={profilePicture}
          alt="Round Image"
          className="round-image"
        />
      </div>
      <div>
        <h1 className="name">Bansi Khokhani</h1>
        <p className="designation">React Native Developer</p>
        <div className="link">
          <a
            href="https://github.com/BansiKhokhani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: '#fff', fontSize: '34px'
              , marginRight: '24px'
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/bansi-khokhani-583099296/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#0077b5', fontSize: '34px', marginRight: '24px' }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:bansikhokhani27@gmail.com"
            aria-label="Gmail"
            style={{ color: '#ffff', fontSize: '34px' }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      
    </div>

  );
};

export default Profile;
