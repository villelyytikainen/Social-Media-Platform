import React, { useState, useEffect, useRef } from 'react';
import "../assets/styles/ChatWindow.css";
import { io } from "socket.io-client";

const ChatWindow = ({ user, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef(null);

    const socket = io("ws://localhost:3008");

    //receive a message from the server
    socket.on("hello", (arg)=> {
        console.log(arg);
    })

    socket.emit("howdy", "stranger");

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Simulated function to send a message (replace with actual implementation)
    const sendMessage = async(e) => {
        console.log(inputMessage)
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            setMessages([...messages, { text: inputMessage, sender: user }]);
            setInputMessage('');
            // Here you would typically send the message to your backend

            await fetch("/api/")
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
                    <form action="post" className="chat-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onSubmit={() => sendMessage()}
                            placeholder="Type a message..."/>
                        <input type="submit" onClick={sendMessage} value="Senf" />
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatWindow;
