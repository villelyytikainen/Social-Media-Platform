import "./css/PostField.css";
import { useState } from "react";
//import {createPost} from "../../../../database/dbOperations";

const PostField = () => {
    const [fieldData, setFieldData] = useState("");

    const handlePost = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        try{
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log(response)
            }

        }catch(error){
            console.error(error)
        }
    };

    const onChange = (e) => {
        setFieldData(e.target.value);

    };

    return (
        <div id='post-field-container'>
            <form onSubmit={handlePost}>
                <textarea name='content' cols='60' rows='5' id='post-textarea' placeholder="What's on your mind?" value={fieldData} onChange={onChange}></textarea>
                <input type='submit' id='post-submit-btn' value='Post' />
            </form>
        </div>
    );
};

export default PostField;
