import { useEffect, useState } from "react";

import "./css/Post.css";

const Post = ({ post }) => {
    const { profile_id, title, written_text, likes, created_at, updated_at } = post;
    const [username, setUsername] = useState("");

    const getUser = async (profile_id) => {
        try {
            const response = await fetch(`/api/users/${profile_id}`);
            const [data] = await response.json();
            setUsername(data.username);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser(profile_id);
    }, [profile_id]);

    return (
        <li id='post-container'>
            <div id='post-username-container'>
                <h2 id='post-name'>{title}</h2>
                <span id='post-username'>@{username}</span>
            </div>
            <div id='post-content'>
                <p>{written_text}</p>
                <span>{likes}</span>
                <p>{created_at.slice(0, 10)}</p>
                <p>{updated_at.slice(0, 10)}</p>
            </div>
        </li>
    );
};

export default Post;
