import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './MyDialogs.css';

export default function MyDialogs() {
  const user = useSelector((store) => store.userStore.auth);
  const [dialogs, setDialogs] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/all-user-dialogs/${user.id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setDialogs(data));
  }, []);

  return (
    <div>
      <h4>Мои диалоги</h4>

      {dialogs?.map((el) => (
        <div className="dialogLinks">
          {/* <h3>{el.User.name}</h3> */}

          <Link to={`/chat/${el.User.id}`}><h3 className="link">{el.User.name}</h3></Link>
        </div>
      ))}

    </div>
  );
}
