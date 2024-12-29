import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';
import Home from '../../../../public/img/Home.svg';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          {index === 0 && (
            <>
              <img className="crumb__logo" src={Home} alt="Home" />
              <span className="crumb__separator">{'>'}</span>
            </>
          )}
          <Link to={currentLink} className="crumb__link">
            {crumb}
          </Link>
          {index > 0 && index < array.length - 1 && (
            <span className="crumb__separator">{'>'}</span>
          )}
        </div>
      );
    });

  return <div className="breadcrumb">{crumbs}</div>;
};