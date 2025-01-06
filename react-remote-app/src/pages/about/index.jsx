import { Outlet } from 'react-router-dom';
import './index.css';

function AboutComponent() {
  return (
    <div className="about-container">
      <h4>This is about page</h4>
      <Outlet />
    </div>
  );
}

export default AboutComponent;
