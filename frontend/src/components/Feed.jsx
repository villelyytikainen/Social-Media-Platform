import PostField from "./PostField";
import Post from "./Post";
import "./css/Feed.css";

const Feed = ({ posts }) => {

    return (
        <div id='feed-container'>
            <PostField />
            <ul id='feed-posts'>
                {posts.sort((a,b) => a.created_at < b.created_at).map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </ul>
        </div>
    );
};

export default Feed;
