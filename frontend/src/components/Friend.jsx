import './css/Friend.css';

const Friend = ({name, username, city}) => {
    return (
        <div id="friend-element">
            <div id="friend-username-container">
                <h2 id="friend-name">{name}</h2>
                <span id="friend-username">{username}</span>
                <p>{city}</p>
            </div>
        </div>
    );
}

export default Friend;