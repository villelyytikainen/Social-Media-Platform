import "./Chatbar.css";
import { useState } from "react";

const Chatbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [minimized, setMinimized] = useState(false);

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    if (loggedIn) {
        return (
            <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
                <button onClick={toggleSidebar}>Small</button>
                <ul id='chat-user-list'>
                    <li>user 1</li>
                    <li>user 2</li>
                    <li>user 3</li>
                    <li>user 4</li>
                    <li>user 5</li>
                    <li>user 6</li>
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default Chatbar;
