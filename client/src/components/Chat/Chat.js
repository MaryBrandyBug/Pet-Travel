import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';

export default function Chat() {
  const user = useSelector((store) => store.userStore);
  console.log('USEEERRRR', user?.name);
  // const [user, setUser] = useState('InitUser');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3001'));

  const submitMessage = (usr, msg) => {
    const messageNew = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
    console.log('messGE submit', messageNew);
    // console.log('messGE submit', user);
    setMessages([messageNew, ...messages]);
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.onmessage = (e) => {
      const newMessage = JSON.parse(e.data);
      // console.log('ONMESSAGE', e.data);
      setMessages([newMessage, ...messages]);
    };
    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket('ws://localhost:3001'));
      };
    };
  }, [user]);
  // [ws.onmessage, ws.onopen, ws.onclose, messages]

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

          {messages.reverse().map((mes, index) => (

            <li key={(user?.id + index)}>
              <b>{mes.user}</b>
              :
              <em>{mes.message}</em>
            </li>
          ))}
        </ul>
      </div>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(user?.name, message);
          setMessage([]);
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
