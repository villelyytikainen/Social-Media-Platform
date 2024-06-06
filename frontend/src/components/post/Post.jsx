import './Post.css';

const Post = ({id, profile_id, written_text, title, likes, created, updated}) => {

    console.log("post ", id, profile_id, written_text, title, likes, created, updated)

    return (
        <li id="post-container">
            <div id="post-username-container">
                <h2 id="post-name">{title}</h2>
                <span id="post-username">@{profile_id}</span>
            </div>
            <div id="post-content">
                <p>{written_text}</p>
                <span>{likes}</span>
                <p>{created}</p>
                <p>{updated}</p>

            </div>
        </li>
    );
}

export default Post;