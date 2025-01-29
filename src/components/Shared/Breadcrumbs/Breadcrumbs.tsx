import { NavLink, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';
import Home from '../../../../public/img/Home.svg';
import { handlerUpperLetter } from '../../../helpers/ProductFilter';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  if (location.pathname === '/' || location.pathname === '/basket') {
    return null;
  }

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      const formattedCrumb = handlerUpperLetter(crumb);

      return (
        <div className="crumb" key={currentLink}>
          <NavLink
            to={currentLink}
            className={`${location.pathname === currentLink ? 'crumb__text--active' : 'crumb__text'}`}
          >
            {formattedCrumb}
          </NavLink>
        </div>
      );
    });

  return (
    <div className={`breadcrumb`}>
      <NavLink className="breadcrumb__link" to="/">
        <img className="breadcrumb__logo" src={Home} alt="Home" />
      </NavLink>
      <span className="breadcrumb__separator">{'>'}</span>
      {crumbs}
    </div>
  );
};
