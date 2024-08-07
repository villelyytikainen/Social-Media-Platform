import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChatUser = ({ username, pfp, minimized, toggleChatWindow }) => {
    return !minimized ? (
        <li className='chat-user-expanded' onClick={toggleChatWindow}>
            {pfp ? <img src={pfp} alt="profile picture" className="chat-user-pfp" /> : <FontAwesomeIcon icon={faUser} />}
            <p className='chat-user-name'>{username}</p>
        </li>
    ) : (
        <li className='chat-user'>
            {pfp ? <img src={pfp} alt="profile picture" className="chat-user-pfp" /> : <FontAwesomeIcon icon={faUser} />}

        </li>
    );
};

export default ChatUser;
