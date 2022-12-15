import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ChatForTwo.css';

export default function ChatForTwo({ ws }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const user = useSelector((store) => store.userStore.auth);
  const receiverProfileId = useParams().id;

  const submitMessage = (senderId, userName, msg, userRole) => {
    const messageNew = {
      receiverProfileId: +receiverProfileId,
      senderId,
      userName,
      message: msg,
      userRole,
    };
    ws.send(JSON.stringify(messageNew));
    console.log('messGE submit', messageNew);
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
      setMessages(result.sort((a, b) => b.createdAt - a.createdAt));
    };
    getMessages();
  }, []);
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
          setMessages([...messages, newMessage]);
        };
      }
    },
    [ws],
  );

  return (
    <div>
      <div className="chat">
        <h3>ChatForTwo</h3>
        <div className="messageBox">
          <ul>
            {messages?.map((el) => (
              el.UserId === user.id
                ? (
                  <li className="sender">
                    <em className="message">{el.message}</em>
                  </li>
                )
                : (
                  <li className="receiver">
                    <em>{el.message}</em>
                  </li>
                )

            ))}
          </ul>
        </div>
        <div className="chatBtnInput">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitMessage(user.id, user.name, message, user.role);
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
    </div>
  );
}

/*  <div>
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
} */
