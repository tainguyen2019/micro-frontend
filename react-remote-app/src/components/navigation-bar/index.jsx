import { NavLink } from 'react-router-dom';
import { BASENAME, EMBEDED_BASENAME } from '../../constants';
import './index.css';

function NavigationBar() {
  const basename = window.location.href.includes('host-app')
    ? EMBEDED_BASENAME
    : BASENAME;

  return (
    <div className="nav-container">
      <div className="nav-link">
        <NavLink
          to={`${basename}/home`}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to={`${basename}/about`}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          About
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to={`${basename}/about/me`}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Me
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
