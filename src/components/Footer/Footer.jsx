import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/stories/magnolia.kitchen.love"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          aria-label="Instagram"
        >
          <FaInstagram className="footer__icon" />
        </a>
        <a
          href="https://www.facebook.com/mymagnoliakit"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          aria-label="Facebook"
        >
          <FaFacebook className="footer__icon" />
        </a>
      </div>
      <div className="footer__developer">
        <a
          href="https://www.developedbyday.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <p className="footer__tag">Developed by DAYTECH</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
