import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Chatbar from "./components/Chatbar";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
    const [token, setToken] = useState(document.cookie.split("=")[1]);

    return !token ? (
        <section id='App'>
            <LandingPage setToken={setToken} />
        </section>
    ) : (
        <section id='App'>
            <Navbar />
            <Home />
            <Chatbar />
        </section>
    );
}

export default App;
