import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './ChatForTwo.css';

export default function ChatForTwo({ ws }) {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(null);

  const user = useSelector((store) => store.userStore.auth);
  const receiverProfileId = useParams().id;

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitMessage = (senderId, userName, msg, userRole) => {
    const messageNew = {
      receiverProfileId: +receiverProfileId,
      senderId,
      userName,
      message: msg,
      userRole,
      createdAt: new Date(),
    };
    ws.send(JSON.stringify(messageNew));
    setMessages([...messages, messageNew]);
  };
  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch('http://localhost:3001/get-all-messages', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserId: user.id, receiverId: receiverProfileId, userRole: user.role }),
      });
      const result = await response.json();
      setMessages(result.sort((a, b) => (b.createdAt < a.createdAt ? 1 : -1)));
    };
    getMessages();
  }, []);
  useEffect(
    () => {
      if (user) {
        ws.onopen = () => {
          ws.send(JSON.stringify({ type: 'open', payload: user.id }));
        };
        ws.onmessage = (e) => {
          const newMessage = JSON.parse(e.data);
          setMessages([...messages, newMessage]);
        };
      }
    },
    [ws],
  );

  return (
    <div>
      <div className="chat">
        <button type="button" className="span" onClick={() => navigate(-1)}>Назад</button>
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
              submitMessage(user.id, user.name, input, user.role);

              setInput('');
            }}
          >
            <div className="text-field">
              <input
                type="text"
                placeholder="Type a message ..."
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
    </div>
  );
}
