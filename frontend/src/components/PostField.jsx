import "./css/PostField.css";
import { useState } from "react";
import Notification from "./Notification";

const PostField = () => {
    const [postContent, setPostContent] = useState({
        title: "",
        content: "",
    });
    const [notification, setNotification] = useState({
        message: "",
        type: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setNotification({ message: "Posted!", type: "notification" });
                setTimeout(() => {
                    setNotification({ message: "", type: "" });
                }, 5000);
                setPostContent({
                    title: "",
                    content: "",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onChange = (e) => {
        console.log(e.target.name);
        setPostContent({
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div id='post-field-container'>
                <form onSubmit={onSubmit}>
                    <input type='text' name='title' value={postContent.title} onChange={onChange} />
                    <textarea
                        name='content'
                        cols='60'
                        rows='5'
                        id='post-textarea'
                        placeholder="What's on your mind?"
                        value={postContent.content}
                        onChange={onChange}
                    ></textarea>
                    <input type='submit' id='post-submit-btn' value='Post' />
                </form>
            </div>
            <Notification content={notification} />
        </>
    );
};

export default PostField;
