import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [minimized, setMinimized] = useState(false);

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    if (loggedIn) {
        return (
            <nav id='navbar' style={{ width: minimized ? "50px" : "200px", transition: "width 0.5s" }}>
                <button id='navbar-minimize-btn' onClick={toggleSidebar}>
                    Small
                </button>
                <ul id='navbar-list'>
                    <li>
                        <Link to='/'>Feed</Link>
                    </li>
                    <li>
                        <Link to='/login'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Messages</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Friends</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Settings</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Log Out</Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav id='navbar' className={minimized}>
                <ul id='navbar-list'>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
