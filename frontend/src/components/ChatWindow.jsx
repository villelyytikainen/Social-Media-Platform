import React, { useState, useEffect, useRef } from 'react';
import "./css/ChatWindow.css";

const ChatWindow = ({ user, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Simulated function to send a message (replace with actual implementation)
    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, { text: inputMessage, sender: 'user' }]);
            setInputMessage('');
            // Here you would typically send the message to your backend
        }
    };

    // Simulated function to receive messages (replace with actual implementation)
    useEffect(() => {
        const receiveMessage = (text) => {
            setMessages(prevMessages => [...prevMessages, { text, sender: 'friend' }]);
        };

        // Simulated incoming message (replace with actual real-time implementation)
        const timer = setTimeout(() => receiveMessage('Hi there!'), 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`chat-window ${isMinimized ? 'minimized' : ''}`}>
            <div className="chat-header">
                <span>{user.name}</span>
                <div className="chat-controls">
                    <button onClick={() => setIsMinimized(!isMinimized)}>
                        {isMinimized ? '▲' : '▼'}
                    </button>
                    <button onClick={() => onClose(user.id)}>✕</button>
                </div>
            </div>
            {!isMinimized && (
                <>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatWindow;
