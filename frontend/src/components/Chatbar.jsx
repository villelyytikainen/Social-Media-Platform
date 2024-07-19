import "./css/Chatbar.css";
import { useState } from "react";
import ChatUser from "./ChatUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Chatbar = () => {
    const [minimized, setMinimized] = useState(false);

    const users = [
        {
            id: 1,
            name: "Agathe Henniger",
            username: "ahenniger0",
        },
        {
            id: 2,
            name: "Vanya Jephcott",
            username: "vjephcott1",
        },
        {
            id: 3,
            name: "Jess Ludford",
            username: "jludford2",
        },
        {
            id: 4,
            name: "Roxine McGilroy",
            username: "rmcgilroy3",
        },
        {
            id: 5,
            name: "Mercie Grose",
            username: "mgrose4",
        },
    ];

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    return !minimized ? (
        <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
            <FontAwesomeIcon icon={faArrowRight} className="toggle-sidebar-icon" onClick={toggleSidebar} size="1x"/>
            <ul id='chat-user-list'>
                {users.map((user) => (
                    <ChatUser key={user.id} name={user.name} username={user.username} />
                ))}
            </ul>
        </div>
    ) : (
        <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
            <FontAwesomeIcon icon={faArrowLeft} className="toggle-sidebar-icon" onClick={toggleSidebar} />
            <ul id='chat-user-list'>
                {users.map((user) => (
                    <ChatUser key={user.id} name={user.name} username={user.username} minimized={minimized} />
                ))}
            </ul>
        </div>
    );
};

export default Chatbar;
