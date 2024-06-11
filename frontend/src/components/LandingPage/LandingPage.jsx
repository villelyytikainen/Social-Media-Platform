
import { useState } from "react";
import "./LandingPage.css";
import Login from "./Login";
import Register from "./Register";

const LandingPage = ({loginUser, setToken}) => {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div id='landing-page-container'>
      <div id='landing-page-form-container'>
        {currentPage === 'login' ? <Login loginUser={loginUser} setToken={setToken}/> : <Register />}
        <p className="landing-page-link" onClick={() => setCurrentPage(currentPage === 'login' ? 'register' : 'login')}>{currentPage === 'login' ? 'Register' : 'Login'}</p>
      </div>
      <div id='landing-page-image-container' />
    </div>
  );
};

export default LandingPage;
