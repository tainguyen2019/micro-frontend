import { NavLink } from 'react-router-dom';
import './index.css';

function NavigationBar() {
  return (
    <div className="nav-container">
      <div className="nav-link">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          About
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to="/about/me"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Me
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
