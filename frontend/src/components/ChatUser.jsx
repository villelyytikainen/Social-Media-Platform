import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChatUser = ({ minimized, user, onSelect }) => {
    return !minimized ? (
        <li className='chat-user-expanded' onClick={onSelect}>
            {user.pfp ? <img src={user.pfp} alt='profile picture' className='chat-user-pfp' /> : <FontAwesomeIcon icon={faUser} />}
            <p className='chat-user-name'>{user.username}</p>
        </li>
    ) : (
        <li className='chat-user' onClick={onSelect}>
            {user.pfp ? <img src={user.pfp} alt='profile picture' className='chat-user-pfp' /> : <FontAwesomeIcon icon={faUser} />}
        </li>
    );
};

export default ChatUser;
