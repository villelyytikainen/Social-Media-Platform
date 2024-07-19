import "./css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMessage, faUserGroup, faGear, faRightFromBracket, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setLoggedIn }) => {
    const [minimized, setMinimized] = useState(false);

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            setLoggedIn(data.loggedIn);
        } catch (error) {
            return error;
        }
    };

    if (!minimized) {
        return (
            <nav id='navbar' style={{ width: minimized ? "50px" : "200px", transition: "width 0.5s" }}>
                <FontAwesomeIcon icon={faArrowLeft} className='toggle-sidebar-icon ' onClick={toggleSidebar} />
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
                        <Link onClick={handleLogout} className='nav-link'>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav id='navbar' style={{ width: minimized ? "50px" : "200px", transition: "width 0.5s" }}>
                <FontAwesomeIcon icon={faArrowRight} onClick={toggleSidebar} className='toggle-sidebar-icon' size='1x' />
                <ul id='navbar-list'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-link'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/messages' className='nav-link'>
                            <FontAwesomeIcon icon={faMessage} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/friends' className='nav-link'>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/settings' className='nav-link'>
                            <FontAwesomeIcon icon={faGear} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={handleLogout} className='nav-link'>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
