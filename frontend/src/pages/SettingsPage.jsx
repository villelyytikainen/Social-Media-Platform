import "../assets/styles/Settings.css";

const SettingsPage = () => {
    return (
        <section id="settings-page">
            <p>Settings Page</p>
            <div className="profile-settings-container">
                <h1>Profile</h1>
                <form action="" className="profile-settings">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                    <input type="button" value="Save" />
                </form>
            </div>
        </section>
    );
}

export default SettingsPage;