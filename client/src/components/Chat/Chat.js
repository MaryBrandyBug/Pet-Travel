import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';

export default function Chat({ ws }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const user = useSelector((store) => store.userStore.auth);

  const submitMessage = (usr, msg) => {
    const messageNew = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
    console.log('messGE submit', messageNew);
    setMessages([messageNew, ...messages]);
  };

  useEffect(
    () => {
      if (user) {
        ws.onopen = () => {
          console.log('WebSocket Connected');
          ws.send(JSON.stringify({ type: 'open', payload: user.id }));
          // ws.send(JSON.stringify({ message }));
        };
        ws.onmessage = (e) => {
          console.log('eeeeeeeeeeeeeeeeeeeeeeeeeee', e);
          const newMessage = JSON.parse(e.data);
          setMessages([newMessage, ...messages]);
        };
      } /* else {
        ws.onclose = () => {
          console.log('WebSocket Disconnected');
        };
      } */
    },
    [ws],
  );

  return (
    <div className="chatRoom">
      {/* <label htmlFor="user">
Name :
<input
type="text"
id="user"
placeholder="User"
value={user}
onChange={(e) => setUser(e.target.value)}
/>
</label> */}

      <div className="messagesContainer">
        <ul>

          {messages.reverse().map((mes) => (
            // key={(user?.id)}
            <li>
              <b>{mes.user}</b>
              :
              <em>{mes.message}</em>
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(user.name, message);
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
