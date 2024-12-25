import Logo from '../../../../public/img/logo.jpeg';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="">
          <img src={Logo} alt="logo" className="footer__logo" />
        </a>
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
            ^
          </button>
        </div>
      </div>
    </footer>
  );
};
