import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './MyDialogsChat.css';

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
    setMessages([...messages, messageNew]);
  };

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch('http://localhost:3001/get-all-messages/from-dialogs', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserId: user.id, receiverId: id /* userRole: user.role */ }),
      });
      const result = await response.json();
      console.log('RESULT FETCH #^^^^^^^^^^', result);
      setMessages(result.sort((a, b) => b.createdAt - a.createdAt));
    };
    getMessages();
  }, []);
  // const sortedMessages = messages.sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div className="chat">
      <h3>MyDialogsChat</h3>
      <div className="messageBox">
        <ul>
          {messages?.map((el) => (
            el.UserId === user.id
              ? (
                <li className="sender">
                  {/* <em className="date">[{el.createdAt.toLocaleString().substring(0, 16)}]</em> */}
                  {/* : */}
                  <em className="message">{el.message}</em>
                </li>
              )
              : (
                <li className="receiver">
                  {/*  <em className="date">[{el.createdAt.toLocaleString().substring(0, 16)}]</em>
                  : */}
                  <em>{el.message}</em>
                </li>
              )

          ))}
        </ul>
      </div>

      {/* <div className="messageBox">
        <ul>
          {messages?.map((el) => (
            <li>
              <em>{el.message}</em>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="chatBtnInput">
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
          <input type="submit" value="Отправить" />
        </form>
      </div>

    </div>
  );
}
