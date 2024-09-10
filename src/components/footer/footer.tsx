import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTelegram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="mailto:someone@example.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p>© Alatoo college student site 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
