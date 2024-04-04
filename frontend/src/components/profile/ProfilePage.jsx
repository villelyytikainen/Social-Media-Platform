import "./Profile.css";

const ProfilePage = () => {
    return (
        <section id='profile-page'>
            <div className='profile-info'>
                <h1>Name</h1>
                <div>
                    <img src='#' alt='' />
                </div>
                <div>
                    <p>Information</p>
                    <p>City, Country</p>
                    <p>@username</p>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default ProfilePage;
