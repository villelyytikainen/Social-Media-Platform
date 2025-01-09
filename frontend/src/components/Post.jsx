import { useEffect, useState } from "react";

import "../assets/styles/Post.css";

const Post = ({ post }) => {

    const { user_id, post_content, created } = post;

    console.log(post)
    const [username, setUsername] = useState("");

    const getUser = async (user_id) => {
        try {
            const response = await fetch(`/api/users/${user_id}`);
            const [data] = await response.json();
            setUsername(data.username);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser(user_id);
    }, [user_id]);

    return (
        <li className='post-container'>
            <div className='post-username-container'>
                <img src="" alt="" className="post-user-pfp" />
                <div className="post-user-info">
                    <p className='post-username'>@{username}</p>
                </div>
            </div>
            <div className='post-content'>
                <p>{post_content}</p>
                {/* <p>{updated_at.slice(0, 10)}</p> */}
            </div>
            <span className="post-created">{created}</span>
        </li>
    );
};

export default Post;
