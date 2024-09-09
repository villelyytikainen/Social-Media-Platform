import "./css/Chatbar.css";
import { useState } from "react";
import ChatUser from "./ChatUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Chatbar = ({toggleChatWindow}) => {
    const [minimized, setMinimized] = useState(false);

    const users = [
        {
            id: 1,
            name: "Agathe Henniger",
            pfp: "https://i.imgur.com/hHAFpvx.jpeg",
            username: "ahenniger0",
        },
        {
            id: 2,
            name: "Vanya Jephcott",
            pfp: "https://i.imgur.com/5Qawm2c.jpeg",
            username: "vjephcott1",
        },
        {
            id: 3,
            name: "Jess Ludford",
            //pfp: "https://i.imgur.com/rXTSNjK.jpeg",
            username: "jludford2",
        },
        {
            id: 4,
            name: "Roxine McGilroy",
            pfp: "https://i.imgur.com/NPAybHT.jpeg",
            username: "rmcgilroy3",
        },
        {
            id: 5,
            name: "Mercie Grose",
            pfp: "https://i.imgur.com/B8ZhWrq.jpeg",
            username: "mgrose4",
        },
    ];

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    return (
        <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
            <FontAwesomeIcon icon={minimized ? faArrowLeft : faArrowRight} className='toggle-sidebar-icon' onClick={toggleSidebar} />
            <ul id='chat-user-list'>
                {users.map((user) => (
                    <ChatUser key={user.id} minimized={minimized} user={user} onSelect={() => toggleChatWindow(user)} />
                ))}
            </ul>
        </div>
    );
};

export default Chatbar;
