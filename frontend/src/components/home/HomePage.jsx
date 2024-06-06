import "./HomePage.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../Profile/ProfilePage";
import Messages from "../Messages/MessagesPage";
import Friends from "../Friends/FriendsPage";
import Settings from "../Settings/SettingsPage";
import Feed from "../Feed/Feed";

const HomePage = ({posts}) => {

    return (
        <section id='home-page'>
            <Routes>
                <Route path='*' element={<Feed posts={posts} />} />
                <Route path='/profile' element={<Profile posts={posts}/>} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </section>
    );
};

export default HomePage;
