import "./Chatbar.css";
import { useState } from "react";
import ChatUser from "./ChatUser";

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
        {
            id: 6,
            name: "Franky Trevan",
            username: "ftrevan5",
        },
        {
            id: 7,
            name: "Broderick Gane",
            username: "bgane6",
        },
        {
            id: 8,
            name: "Lloyd Burnage",
            username: "lburnage7",
        },
        {
            id: 9,
            name: "Hardy Moffatt",
            username: "hmoffatt8",
        },
        {
            id: 10,
            name: "Afton Tratton",
            username: "atratton9",
        },
    ];

    const toggleSidebar = () => {
        setMinimized(!minimized);
    };

    return (
        <div id='chatbar' style={{ width: minimized ? "50px" : "150px", transition: "width 0.5s" }}>
            <button onClick={toggleSidebar}>Minimize</button>
            <ul id='chat-user-list'>
                {users.map((user) => (
                    <ChatUser key={user.id} name={user.name} username={user.username} />
                ))}
            </ul>
        </div>
    );
};

export default Chatbar;
