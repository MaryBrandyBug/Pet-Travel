import React, { useState, useEffect } from 'react';
import './Chat.css';

// // const user = { id: 1, name: 'Jim' };

// const URL = 'ws://127.0.0.1:3001/chat';
// // const socketInit = new WebSocket(URL);
// // console.log(socketInit);

// export default function Chat() {
//   const [user, setUser] = useState({ id: 1, name: 'Jim' });
//   const [message, setMessage] = useState([]);
//   const [messages, setMessages] = useState(['privet', 'kak dela']);
//   // const [socket, setSocket] = useState(socketInit);

//   const submitMessage = (usr, msg) => {
//     const message = { user: usr, message: msg };
//     socket.send(JSON.stringify({ type: 'open', payload: 'ws opened' }));
//     setMessages([message, ...messages]);
//   };

//   useEffect(() => {
//     if (user) {
//       socket.onopen = () => {
//         console.log('WebSocket Connected');
//       };
//     }
//     socket.onerror = (error) => {
//       console.log(error);
//     };

//     socket.onmessage = (e) => {
//       const newMessage = JSON.parse(e.data);
//       setMessages([newMessage, ...messages]);
//     };
//     /*   return () => {
//         socket.onclose = () => {
//           console.log('WebSocket Disconnected');
//           setSocket(new WebSocket(URL));
//         };
//       }; */
//   }, [socket.onmessage, socket.onopen, socket.onclose, messages]);

//   return (
//     <div className="chat">
//       <div id="chatbox" className="chatbox chatbox-close">
//         {Array.isArray(messages) && messages.map((message) => (
//           // auth.id
//           <div>
//             {/* <div className={message.user_from !== user ? 'chatbox-textstart' : 'chatbox-textend'}> */}
//             <span className="chatbox-date">
//               DATE
//               {/* {message.createdAt.toLocaleString()} */}
//             </span>
//             <span className="chatbox-text">
//               {message}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           submitMessage(user, message);
//           setMessage([]);
//         }}
//         name="chatForm"
//         className="chatform"
//       >
//         <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="text" />
//         {/* <input type="hidden" name="user_from" value={auth.id} /> */}
//         <input type="hidden" name="user_to" value={user.id} />
//         <button type="submit">Send</button>
//       </form>
//     </div>

//   );

export default function Chat() {
  const [user, setUser] = useState('Tarzan');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  const submitMessage = (usr, msg) => {
    const messageNew = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
    setMessages([messageNew, ...messages]);
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.onmessage = (e) => {
      const newMessage = JSON.parse(e.data);
      setMessages([newMessage, ...messages]);
    };
    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  return (
    <div>
      <label htmlFor="user">
        Name :
        <input
          type="text"
          id="user"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>

      <ul>
        {messages.reverse().map((mes, index) => (
          <li key={index}>
            <b>{mes.user}</b>
            :
            <em>{mes.message}</em>
          </li>
        ))}
      </ul>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(user, message);
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
