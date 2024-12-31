import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Chatbar from "./components/Chatbar";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [me, setMe] = useState({});
    const [openChats, setOpenChats] = useState([]);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            try {
                const response = await fetch("/api/auth/check-auth", {
                    credentials: "include",
                });
                const authData = await response.json();
                const loggedIn = authData.loggedIn;
                console.log(authData)
                setLoggedIn(loggedIn);
            } catch (error) {
                console.error("Error checking authentication status:", error);
            }
        };

        fetchAuthStatus();
    }, []);

    const toggleChatWindow = (user) => {
        setOpenChats(prevChats => {
            const existingChat = prevChats.find(chat => chat.id === user.id);
            if (existingChat) {
                return [...prevChats.filter(chat => chat.id !== user.id), existingChat];
            } else {
                return [...prevChats, user];
            }
        });
    };

    const closeChat = (userId) => {
        setOpenChats(prevChats => prevChats.filter(chat => chat.id !== userId));
    };

    return !loggedIn ? (
        <section id='App'>
            <LandingPage setLoggedIn={setLoggedIn} setMe={setMe} />
        </section>
    ) : (
        <section id='App'>
            <Navbar setLoggedIn={setLoggedIn} />
            <Home user={me}/>
            <div className="chat-windows-container">
                {openChats.map(user => (
                    <ChatWindow key={user.id} user={user} onClose={closeChat} />
                ))}
            </div>
            <Chatbar toggleChatWindow={toggleChatWindow} />
        </section>
    );
}

export default App;
