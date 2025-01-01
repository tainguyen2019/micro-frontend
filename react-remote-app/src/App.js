import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfileComponent from './components/my-profile';
import NavigationBar from './components/navigation-bar';
import { BASENAME } from './constants';
import AboutComponent from './pages/about';
import HomeComponent from './pages/home';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path={`${BASENAME}/*`}>
            <Route path="home" element={<HomeComponent />} />
            <Route path="about" element={<AboutComponent />}>
              <Route path="me" element={<MyProfileComponent />} />
            </Route>
            <Route path="" element={<Navigate to="home" />} />
          </Route>
          <Route path="*" element={<Navigate to={BASENAME} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
