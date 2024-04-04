import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Chatbar from "./components/chat/Chatbar";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/HomePage";
import Profile from "./components/profile/ProfilePage";
import Messages from "./components/messages/MessagesPage";
import Friends from "./components/friends/FriendsPage";
import Settings from "./components/settings/SettingsPage";

function App() {
    return (
        <section id='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
            <Chatbar />
        </section>
    );
}

export default App;
