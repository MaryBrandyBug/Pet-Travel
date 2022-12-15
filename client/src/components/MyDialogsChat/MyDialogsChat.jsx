import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './MyDialogsChat.css';

export default function MyDialogsChat({ ws }) {
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
      setMessages(result.sort((a, b) => (b.createdAt < a.createdAt ? 1 : -1)));
    };
    getMessages();
  }, []);
  console.log(messages);

  return (
    <div className="chat">
      <Link to="/profile/my-chats" className="span"><h3>Назад в Мои диалоги</h3></Link>
      <div className="messageBox">
        <ul>
          {messages?.map((el) => (
            el.UserId === user.id
              ? (
                <li className="sender">
                  <div className="senderText">
                    <div>
                      <h4 className="message">{el.message}</h4>
                    </div>
                    <div>
                      <span className="date">{el.createdAt?.toLocaleString().substring(0, 16).split('T').join(' ')}</span>
                    </div>

                  </div>
                </li>
              )
              : (
                <li className="receiver">
                  <div className="receiverText">
                    <div>
                      <h4 className="message">{el.message}</h4>
                    </div>
                    <div>
                      <span className="date">{el.createdAt?.toLocaleString().substring(0, 16).split('T').join(' ')}</span>
                    </div>
                  </div>
                </li>
              )
          ))}
        </ul>
      </div>
      <div className="chatBtnInput">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitMessage(user.id, user.name, input);
            setInput('');
          }}
        >
          <div className="text-field">
            <input
              type="text"
              placeholder="Введите сообщение ..."
              value={input}
              name="message"
              className="text-field-input"
              onChange={handleInput}
            />
            <div className="textBtn">
              <input type="submit" value="Отправить" className="form-submit-button hover" />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
