import "./HomePage.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../profile/ProfilePage";
import Messages from "../messages/MessagesPage";
import Friends from "../friends/FriendsPage";
import Settings from "../settings/SettingsPage";
import Feed from "../feed/Feed";

const HomePage = () => {
    return (
        <section id='home-page'>
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </section>
    );
};

export default HomePage;
