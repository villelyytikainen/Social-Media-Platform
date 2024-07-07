const ChatUser = ({name, username}) => {
    return (
        <li className="chat-user">
            <p>{name}</p>
        </li>
    );
}

export default ChatUser;