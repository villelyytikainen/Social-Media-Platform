import "./Chatbar.css";
import { useState } from "react";

const Chatbar = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [minimized, setMinimized] = useState(false);

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    if (loggedIn) {
        return (
            <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
                <button onClick={toggleSidebar}>Small</button>
                <ul id='chat-user-list'>
                    <li className="chat-user">User</li>
                    <li className="chat-user">User</li>
                    <li className="chat-user">User</li>
                    <li className="chat-user">User</li>
                    <li className="chat-user">User</li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default Chatbar;
