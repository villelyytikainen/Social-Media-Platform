import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/HomePage";
import Chatbar from "./components/Chat/Chatbar";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

function App() {
    const [token, setToken] = useState("");
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

    if (!token) {
        return (
            <section id='App'>
                <LandingPage loginUser={handleLogin} setToken={setToken} />
            </section>
        );
    } else {
        return (
            <section id='App'>
                <Navbar />
                <Home posts={posts} />
                <Chatbar />
            </section>
        );
    }
}

export default App;
