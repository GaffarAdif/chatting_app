// src/components/ChatWindow.jsx
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext'; // If you need user context


const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // State to hold messages
  const [input, setInput] = useState(''); // State to hold the current input

  // Handle sending a message
  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'You', // Assuming the sender is the current user
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Update messages
      setInput(''); // Clear input
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
