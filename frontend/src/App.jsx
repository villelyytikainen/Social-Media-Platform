import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Chatbar from "./components/Chatbar";
import LandingPage from "./components/LandingPage";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [me, setMe] = useState({})

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

    const toggleChatWindow = () => {
        console.log("lapanen");
    };

    return !loggedIn ? (
        <section id='App'>
            <LandingPage setLoggedIn={setLoggedIn} setMe={setMe} />
        </section>
    ) : (
        <section id='App'>
            <Navbar setLoggedIn={setLoggedIn} />
            <Home user={me}/>
            <ChatWindow />
            <Chatbar toggleChatWindow={toggleChatWindow} />
        </section>
    );
}

export default App;
