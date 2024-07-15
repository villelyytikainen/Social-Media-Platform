import PostField from "./PostField";
import Post from "./Post";
import "./css/Feed.css";

const Feed = ({ posts }) => {

    return (
        <div id='feed-container'>
            <PostField />
            <ul id='feed-posts'>
                {posts.map((post) => (
                    <Post key={post.id} name={post.title} username={post.profile_id} content={post.written_text} liked={post.likes} created={post.created_at} updated={post.updated_at} />
                ))}
            </ul>
        </div>
    );
};

export default Feed;
