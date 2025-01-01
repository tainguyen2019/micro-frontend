import { Outlet } from 'react-router-dom';
import './index.css';

function AboutComponent() {
  return (
    <div className="about-container">
      <h1>This is about page</h1>
      <Outlet />
    </div>
  );
}

export default AboutComponent;
