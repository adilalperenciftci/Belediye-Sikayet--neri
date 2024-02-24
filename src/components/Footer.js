import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center">
      <div className="container">
        <img src="https://www.meram.bel.tr/upload/sdosyalar/MTYxMGQyODQ3ZWM3OTM.svg" alt="Meram Belediyesi Logosu" style={{ maxWidth: '100px', marginBottom: '20px' }} />
        <span className="text-muted">Meram Belediyesi © 2024</span>
        <p>Adres:Yenişehir Mahallesi, Azerbeycan Cd. No:5, 42010 Meram/Konya</p>
        <p>Telefon: (0332) 320 10 00</p>
        <p>
          Sosyal Medya:
          <a href="https://www.facebook.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </p>
        <div className="map-container" style={{ position: 'absolute', right: '20px', bottom: '20px', width: '300px', height: '200px', overflow: 'hidden' }}>
          <iframe
            title="Meram Belediyesi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.2366317526103!2d32.46927967557674!3d37.8547532719654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085ac90bbbed3%3A0xe5d4bafd609e832c!2sMeram%20Belediyesi!5e0!3m2!1str!2str!4v1708634717209!5m2!1str!2str"
            width="300"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
