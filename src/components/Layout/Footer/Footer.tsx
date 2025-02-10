import './footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__logo">
          <img src="/public/img/Logo.svg" alt="logo" className="footer__logo" />
        </Link>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a
                href="https://github.com/Pashahu1"
                className="footer__nav-link"
              >
                Github
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="">
                Contacts
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="">
                Rights
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__back-to-top">
          <span className="footer__back-to-top-text">Back to top</span>
          <button className="footer__back-to-top-button slider__button">
            <img src="./public/img/ArrowUp.svg" alt="arrowUp" />
          </button>
        </div>
      </div>
    </footer>
  );
};
