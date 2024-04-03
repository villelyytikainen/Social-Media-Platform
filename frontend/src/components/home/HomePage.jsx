import "./HomePage.css";

const HomePage = () => {
    return (
        <section id='home-page'>
            <div id='posting-container'>
                <textarea name='' cols='60' rows='5' id="post-textarea"></textarea>
                <button id="post-submit-btn">Post</button>
            </div>
            <hr />
        </section>
    );
};

export default HomePage;
