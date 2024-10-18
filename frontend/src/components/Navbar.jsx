import "../assets/styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMessage, faUserGroup, faGear, faRightFromBracket, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import HoverInfo from "./HoverInfo";

const Navbar = ({ setLoggedIn }) => {
    const [minimized, setMinimized] = useState(true);
    const [toggleInfo, setToggleInfo] = useState(false);
    const [toggleInfoData, setToggleInfoData] = useState({top: 0, left:0, link: ""})

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

    const handleInfoEnter = (event) => {
        const rect = event.target.getBoundingClientRect();
        const link = event.currentTarget.getAttribute("data-info");
        setToggleInfoData({position: rect, link: link});
        setToggleInfo(true)
    }

    const handleInfoExit = (event) => {
        setToggleInfo(false);
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
                        </ul>
                    </li>
                    <li className='logout-item'>
                        <Link onClick={handleLogout} className='nav-link'>
                            Logout
                        </Link>
                    </li>
                </ul>
                {toggleInfo ? <HoverInfo data={toggleInfoData}/> : null}
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
                                <Link to='/' className='nav-link' data-info="Home" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/profile' className='nav-link' data-info="Profile" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/messages' className='nav-link' data-info="Messages" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/friends' className='nav-link' data-info="Friends" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                                    <FontAwesomeIcon icon={faUserGroup} />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/settings' className='nav-link' data-info="Settings" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                                    <FontAwesomeIcon icon={faGear} />
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='logout-item'>
                        <Link onClick={handleLogout} className='nav-link' data-info="Logout" onMouseEnter={handleInfoEnter} onMouseLeave={handleInfoExit}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
                    </li>
                </ul>
                {toggleInfo ? <HoverInfo data={toggleInfoData}/> : null}
            </nav>
        );
    }
};

export default Navbar;
