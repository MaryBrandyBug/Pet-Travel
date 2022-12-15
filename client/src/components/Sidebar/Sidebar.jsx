import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const user = useSelector((store) => store.userStore.auth);

  return (
    <div className="side_text">
      {user?.role === 'parent'
        ? <Link to={`/profile/${user?.role}`}><span className="span">Мой профиль</span></Link>
        : <Link to={`/profile/${user?.role}`}><span className="span">Мой профиль</span></Link>}
      {' '}
      <Link to="/profile/my-chats"><span className="span">Мои диалоги</span></Link>

      {/*  <Link to="/my-chats"><span className="span">Мои диалоги</span></Link> */}

      {' '}
      <Link to="/profile/reviews"><span className="span">Отзывы</span></Link>
      {' '}
      <Link to="/profile/settings"><span className="span">Настройки</span></Link>
    </div>
  );
}
