import { useState } from "react";
import "../assets/styles/LandingPage.css";
import Login from "../components/Login";
import Register from "../components/Register";

const LandingPage = ({ setLoggedIn, setMe }) => {
    const [currentPage, setCurrentPage] = useState("login");

    return (
        <div id='landing-page-container'>
            <div id='landing-page-form-container'>
                {currentPage === "login" ? <Login setLoggedIn={setLoggedIn} setMe={setMe} /> : <Register />}
                <p className='landing-page-link' onClick={() => setCurrentPage(currentPage === "login" ? "register" : "login")}>
                    {currentPage === "login" ? "Register" : "Login"}
                </p>
            </div>
            <div id='landing-page-image-container' />
        </div>
    );
};

export default LandingPage;
