import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChatUser = ({ name, username, minimized }) => {
    return !minimized ? (
        <li className='chat-user'>
            <p className='chat-user-name'>{name}</p>
        </li>
    ) : (
        <li className='chat-user'>
            <FontAwesomeIcon icon={faUser} />
            <p className='chat-user-username'>{name.split(" ").shift()}</p>
        </li>
    );
};

export default ChatUser;
