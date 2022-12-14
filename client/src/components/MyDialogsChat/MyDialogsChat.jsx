import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function MyDialogsChat({ ws }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(null);

  const user = useSelector((store) => store.userStore.auth);
  const { id } = useParams();

  const submitMessage = (senderId, userName, msg) => {
    const messageNew = {
      receiverId: +id,
      senderId: user.id,
      userName: user.name,
      message: msg,
    };
    ws.send(JSON.stringify(messageNew));
    console.log('message myDialogsChat 20', messageNew);
    setMessages([messageNew, ...messages]);
  };

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch('http://localhost:3001/get-all-messages', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserId: user.id, receiverId: id }),
      });
      const result = await response.json();
      setMessages(result);
    };
    getMessages();
  }, []);
  console.log(messages);

  return (
    <div>
      <h3>MyDialogsChat</h3>
      <div>
        <ul>
          {messages?.map((el) => (
            <li>
              {/* <b>{el.UserId}</b> : */}

              <em>{el.message}</em>
            </li>
          ))}

        </ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(user.id, user.name, message);
          setMessage('');
        }}
      >
        <input
          type="text"
          placeholder="Type a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>

    </div>
  );
}
