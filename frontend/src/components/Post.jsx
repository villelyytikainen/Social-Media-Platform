import { useEffect, useState } from "react";

import "../assets/styles/Post.css";

const Post = ({ post }) => {
    const { profile_id, profile_name, written_text, likes, created_at, updated_at } = post;
    // const [username, setUsername] = useState("");

    // const getUser = async (profile_id) => {
    //     try {
    //         const response = await fetch(`/api/users/${profile_id}`);
    //         const [data] = await response.json();
    //         setUsername(data.username);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getUser(profile_id);
    // }, [profile_id]);

    return (
        <li className='post-container'>
            <div className='post-username-container'>
                <img src="" alt="" className="post-user-pfp" />
                <div className="post-user-info">
                    <p className='post-username'>@{profile_name}</p>
                </div>
            </div>
            <div className='post-content'>
                <p>{written_text}</p>
                <span>{likes}</span>
                {/* <p>{updated_at.slice(0, 10)}</p> */}
            </div>
            <span className="post-created">{created_at.slice(0, 10)}</span>
        </li>
    );
};

export default Post;
