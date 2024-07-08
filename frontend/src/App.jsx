import { useEffect, useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Chatbar from "./components/Chatbar";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const cookies = document.cookie;
        setToken(cookies.split("=")[1]);
    });

    const setToken = (token) => {
        console.log(token);
        if (!token) {
            setAuthenticated(false);
        } else {
            setAuthenticated(true);
        }
    };

    if (!authenticated) {
        return (
            <section id='App'>
                <LandingPage setToken={setToken} />
            </section>
        );
    }

    return (
        <section id='App'>
            <Navbar />
            <Home />
            <Chatbar />
        </section>
    );
}

export default App;
