import "./css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMessage, faUserGroup, faGear, faRightFromBracket, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import HoverInfo from "./HoverInfo";

const Navbar = ({ setLoggedIn }) => {
    const [minimized, setMinimized] = useState(true);
    const [toggleInfo, setToggleInfo] = useState(false);

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

    const handleToggleInfo = (event) => {
        const rect = event.target.getBoundingClientRect();
        console.log(rect)
        setToggleInfo(!toggleInfo);
    }

    if (!minimized) {
        return (
            <nav id='navbar' style={{ width: minimized ? "50px" : "200px", transition: "width 0.5s" }}>
                <ul id='navbar-list'>
                    <FontAwesomeIcon icon={faArrowLeft} className='toggle-sidebar-icon ' onClick={toggleSidebar} />
                    <li className='nav-item'>
                        <ul className='navbar-list-inner'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/profile' className='nav-link' onMouseEnter={handleToggleInfo} onMouseLeave={handleToggleInfo}>
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
                        </ul>
                    </li>
                    <li className='logout-item'>
                        <Link onClick={handleLogout} className='nav-link'>
                            Logout
                        </Link>
                    </li>
                </ul>
                {toggleInfo ? <HoverInfo /> : null}
            </nav>
        );
    } else {
        return (
            <nav id='navbar' style={{ width: minimized ? "50px" : "200px", transition: "width 0.5s" }}>
                <ul id='navbar-list'>
                    <FontAwesomeIcon icon={faArrowRight} onClick={toggleSidebar} className='toggle-sidebar-icon' size='1x' />
                    <li className='nav-item'>
                        <ul className='navbar-list-inner'>
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
                        </ul>
                    </li>
                    <li className='logout-item'>
                        <Link onClick={handleLogout} className='nav-link'>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
                    </li>
                </ul>
                {toggleInfo ? <HoverInfo /> : null}
            </nav>
        );
    }
};

export default Navbar;
