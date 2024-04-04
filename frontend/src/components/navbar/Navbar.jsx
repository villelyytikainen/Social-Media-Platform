import "./Navbar.css";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../home/HomePage";
import Profile from "../profile/ProfilePage";
import Messages from "../messages/MessagesPage";
import Friends from "../friends/FriendsPage";
import Settings from "../settings/SettingsPage";

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
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-link'>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/messages' className='nav-link'>
                            Messages
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/friends' className='nav-link'>
                            Friends
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/settings' className='nav-link'>
                            Settings
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/logout' className='nav-link'>
                            Log Out
                        </Link>
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
