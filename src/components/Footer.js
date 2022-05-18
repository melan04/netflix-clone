import React from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="/" className="footer__social">
            <FacebookIcon />
          </a>
          <a href="/" className="footer__social">
            <InstagramIcon />
          </a>
          <a href="/" className="footer__social">
            <TwitterIcon />
          </a>
          <a href="/" className="footer__social">
            <YouTubeIcon />
          </a>
        </div>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Mentions légales</a>
          </li>
          <li className="footer__link">
            <a href="/">Recrutement</a>
          </li>
          <li className="footer__link">
            <a href="/">Centre d'aide</a>
          </li>
          <li className="footer__link">
            <a href="/">Presse</a>
          </li>
          <li className="footer__link">
            <a href="/">Cartes cadeaux</a>
          </li>
          <li className="footer__link">
            <a href="/">Informations légales</a>
          </li>
          <li className="footer__link">
            <a href="/">Nous contacter</a>
          </li>
          <li className="footer__link">
            <a href="/">Confidentialité</a>
          </li>
        </ul>
        <div className="footer__copy">Netflix clone - tous droits réservés</div>
      </div>
    </footer>
  );
};

export default Footer;
