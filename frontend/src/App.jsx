import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/HomePage";
import Chatbar from "./components/Chat/Chatbar";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return (
            <section id='App'>
                <LandingPage loginUser={handleLogin} />
            </section>
        );
    } else {
        return (
            <section id='App'>
                <Navbar isLoggedIn={isLoggedIn} />
                <Home posts={posts} />
                <Chatbar />
            </section>
        );
    }
}

export default App;
