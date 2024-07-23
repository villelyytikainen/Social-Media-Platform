import PostField from "./PostField";
import Post from "./Post";
import "./css/Feed.css";

const Feed = ({ posts }) => {

    const post = {
        id: 1,
        profile_id: 1,
        profile_name: "testi",
        title: "title",
        written_text: "content",
        created_at: "2024-17-12",
        updated_at: "2024-17-12"
    }

    return (
        <div id='feed-container'>
            <PostField />
            <ul id='feed-posts'>
                {/* {posts.sort((a,b) => a.created_at < b.created_at).map((post) => (
                    <Post key={post.id} post={post} />
                ))} */}
                <Post key={post.id} post={post} />
            </ul>
        </div>
    );
};

export default Feed;
