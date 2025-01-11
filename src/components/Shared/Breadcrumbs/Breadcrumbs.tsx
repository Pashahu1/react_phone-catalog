import { NavLink, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';
import Home from '../../../../public/img/Home.svg';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={currentLink}>
          <NavLink to={currentLink} className="crumb__text">
            {crumb}
          </NavLink>
        </div>
      );
    });

  return (
    <div
      className={`breadcrumb ${location.pathname === currentLink ? 'active' : ''}`}
    >
      <NavLink className="breadcrumb__link" to="/">
        <img className="breadcrumb__logo" src={Home} alt="Home" />
      </NavLink>
      <span className="breadcrumb__separator">{'>'}</span>
      {crumbs}
    </div>
  );
};
