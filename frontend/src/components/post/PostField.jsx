import "./PostField.css";

const PostField = () => {
    return (
        <div id='post-field-container'>
            <h2>What's on your mind?</h2>
            <textarea name='' cols='60' rows='5' id='post-textarea'></textarea>
            <button id='post-submit-btn'>Post</button>
        </div>
    );
};

export default PostField;
