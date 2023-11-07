import React, { useState } from 'react';

function Messaging({ messages, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="messaging">
      <h2>Chat</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className={`message-bubble ${message.sentByUser ? 'sent' : 'received'}`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Messaging;
