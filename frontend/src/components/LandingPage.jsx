
import { useState } from "react";
import "./css/LandingPage.css";
import Login from "./Login";
import Register from "./Register";

const LandingPage = ({setLoggedIn}) => {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div id='landing-page-container'>
      <div id='landing-page-form-container'>
        {currentPage === 'login' ? <Login setLoggedIn={setLoggedIn}/> : <Register />}
        <p className="landing-page-link" onClick={() => setCurrentPage(currentPage === 'login' ? 'register' : 'login')}>{currentPage === 'login' ? 'Register' : 'Login'}</p>
      </div>
      <div id='landing-page-image-container' />
    </div>
  );
};

export default LandingPage;
