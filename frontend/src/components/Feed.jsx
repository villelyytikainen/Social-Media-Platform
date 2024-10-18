import PostField from "./PostField";
import Post from "./Post";
import "../assets/styles/Feed.css";

const Feed = ({ posts }) => {

    const post = {
        id: 1,
        profile_id: 1,
        profile_name: "testi",
        title: "title",
        written_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        created_at: "2024-17-12",
        updated_at: "2024-17-12"
    }

    return (
        <div id='feed-container'>
            <PostField />
            <ul id='feed-posts'>
                {posts.sort((a,b) => a.created_at < b.created_at).map((post) => (
                    <Post key={post.id} post={post} />
                ))}
                <Post key={post.id} post={post} />
            </ul>
        </div>
    );
};

export default Feed;
