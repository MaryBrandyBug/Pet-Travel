import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

export default function MyDialogs() {
  const user = useSelector((store) => store.userStore.auth);

  console.log('MyDialogs', user.id);
  const [dialogs, setDialogs] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/all-user-dialogs/${user.id}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setDialogs(data));
  }, []);
  console.log('dialogs state front', dialogs);

  return (
    <div>
      <h4>Мои диалоги</h4>

    </div>
  );
}
