import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfileComponent from './components/my-profile';
import NavigationBar from './components/navigation-bar';
import AboutComponent from './pages/about';
import HomeComponent from './pages/home';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter basename="react-app">
        <NavigationBar />
        <div className="content-wrapper"></div>
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />}>
            <Route path="me" element={<MyProfileComponent />} />
          </Route>
          <Route path="/" element={<Navigate to="react-app/home" />} />
          <Route path="*" element={<Navigate to="react-app/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
