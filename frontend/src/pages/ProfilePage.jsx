import React, { useState } from "react";
import "../assets/styles/Profile.css";
import Feed from "../components/Feed";
import PostField from "../components/PostField";

const ProfilePage = ({ user, posts }) => {
    console.log(user, posts)
    const [userPosts, setUserPosts] = useState(posts.filter(post => post.user_id === user.id));

    const addNewPost = (newPost) => {
        setUserPosts([newPost, ...userPosts]);
    };

    return (
        <section id='profile-page'>
            <div id='profile-info-container'>
                <div className="profile-image-container">
                    <img src={user.pfp || "/default-profile-picture.png"} alt={user.name} className="profile-image"/>
                </div>
                <div className="profile-info">
                    <h1>{user.name}</h1>
                    <p>{user.bio || "No bio available"}</p>
                    <p>{user.location || "Location not specified"}</p>
                    <p>@{user.username}</p>
                </div>
            </div>
            <h2>Your Posts</h2>
            <Feed posts={userPosts} />
        </section>
    );
};

export default ProfilePage;
