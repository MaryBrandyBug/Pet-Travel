import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './MyDialogsChat.css';

export default function MyDialogsChat({ ws }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState('');

  const user = useSelector((store) => store.userStore.auth);
  const { id } = useParams();

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitMessage = (senderId, userName, msg) => {
    const messageNew = {
      receiverId: +id,
      senderId: user.id,
      userName: user.name,
      message: msg,
      createdAt: new Date(),
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
      // console.log('RESULT SORT #^^^^^^^^^^', result.sort((a, b) => b.createdAt - a.createdAt));
      setMessages(result.sort((a, b) => (b.createdAt < a.createdAt ? 1 : -1)));
      // setMessages(result);
    };
    getMessages();
  }, []);
  // const sortedMessages = messages.sort((a, b) => a.createdAt - b.createdAt);
  // const sortedStudents = messages.sort((a, b) => b.createdAt < a.createdAt ? 1: -1)

  return (
    <div className="chat">
      <h3>MyDialogsChat</h3>
      <button type="button" onClick={() => console.log(messages)}>TestState</button>
      <div className="messageBox">
        <ul>
          {messages?.map((el) => (
            el.UserId === user.id
              ? (
                <li className="sender">
                  <em className="date">{el.createdAt?.toLocaleString().substring(0, 16).split('T').join(' ')}</em>
                  :
                  <em className="message">{el.message}</em>
                </li>
              )
              : (
                <li className="receiver">
                  <em className="date">{el.createdAt?.toLocaleString().substring(0, 16).split('T').join(' ')}</em>
                  :
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
            submitMessage(user.id, user.name, input);
            setInput('');
          }}
        >
          <input
            type="text"
            placeholder="Type a message ..."
            value={input}
            name="message"
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInput}
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>

    </div>
  );
}
