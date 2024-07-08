import "./css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            const t = "token"

            document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } catch (error) {
            return error;
        }
    };

    if (!minimized) {
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
                <button id='navbar-minimize-btn' onClick={toggleSidebar}>
                    Small
                </button>
                <ul id='navbar-list'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2L0 9l2 1 1 12h1v-9h6v9h3v-9h6v9h1l1-12 2-1-12-7zm8 19h-5v-6h-4v6H4l8-5 8 5z' />
                            </svg>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' />
                            </svg>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/messages' className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12c0 2.92 1.19 5.56 3.12 7.48.17.2.28.45.28.72v1.2l2.99-1.2c.17.07.36.11.55.12.04.01.07.03.11.04.36.11.75.16 1.15.16 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 1c4.3 0 7.8 3.37 7.99 7.65-.4-.32-.91-.52-1.48-.52H12V4zm-2 5h8v2H10V9zm0 3h5v2H10v-2z' />
                            </svg>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/friends' className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2C5.37 2 0 7.37 0 14c0 3.2 1.3 6.1 3.4 8.2 1.6 1.6 3.7 2.8 6 3.5v-2.9c0-1.1.9-2 2-2s2 .9 2 2v2.9c2.3-.8 4.4-2 6-3.5C22.7 20.1 24 17.1 24 14c0-6.63-5.37-12-12-12zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-4-7h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' />
                            </svg>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/settings' className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8h4v-2h-4v2z' />
                            </svg>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={handleLogout} className='nav-link'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-3.86 3.14-7 7-7s7 3.14 7 7v3h-2v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.65 1.35-3 3-3s3 1.35 3 3v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-5.52-4.48-10-10-10z' />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
