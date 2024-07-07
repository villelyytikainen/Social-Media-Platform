import { useState, useEffect } from "react";
import "./css/HomePage.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./ProfilePage";
import Messages from "./MessagesPage";
import Friends from "./FriendsPage";
import Settings from "./SettingsPage";
import Feed from "./Feed";

const HomePage = () => {
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

    return (
        <section id='home-page'>
            <Routes>
                <Route path='*' element={<Feed posts={posts} />} />
                <Route path='/profile' element={<Profile posts={posts} />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </section>
    );
};

export default HomePage;
