import "./Profile.css";
import Feed from "../Feed/Feed";

const ProfilePage = ({posts}) => {

    //TODO: Check posts from users that are friends
    //const friends = useState([]);
    /*posts.map((post) => {
        return friends.includes(post.profile_id);
    })
*/


    return (
        <section id='profile-page'>
            <h1>Name</h1>
            <div id='profile-info-container'>
                <div className="profile-image-container">
                    <img src='https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg' alt='' className="profile-image"/>
                </div>
                <div className="profile-info">
                    <p>Information</p>
                    <p>City, Country</p>
                    <p>@username</p>
                </div>
            </div>
            <hr />
            <Feed posts={posts}/>
        </section>
    );
};

export default ProfilePage;
