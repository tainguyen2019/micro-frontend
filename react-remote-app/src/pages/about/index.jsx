import { Outlet } from 'react-router-dom';
import './index.css';

function AboutComponent() {
  return (
    <div className="about-container">
      <h1>This is about page</h1>
      {/* <div style={{ width: 100, height: 100 }}> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
}

export default AboutComponent;
