import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ChatForTwo({ ws }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const user = useSelector((store) => store.userStore.auth);
  const receiverProfileId = useParams().id;

  const submitMessage = (senderId, userName, msg) => {
    const messageNew = {
      receiverProfileId: +receiverProfileId,
      senderId,
      userName,
      message: msg,
    };
    ws.send(JSON.stringify(messageNew));
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
      }
    },
    [ws],
  );

  return (
    <div>
      <div className="chatRoom">
        <div className="messagesContainer">
          <ul>

            {messages?.reverse().map((mes) => (
              // key={(user?.id)}
              <li>
                <b>{mes.userName}</b>
                :
                <em>{mes.message}</em>
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
      Чат
    </div>

  );
}
