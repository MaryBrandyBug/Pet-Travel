import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const user = useSelector((store) => store.userStore.auth);

  return (
    <div className="side_text">
      {user?.role === 'parent'
        ? <Link className="dropbtn" to={`/profile/${user?.role}`}>Мой профиль</Link>
        : <Link className="dropbtn" to={`/profile/${user?.role}`}>Мой профиль</Link>}
      {' '}
      <Link to="/chat"><span className="span">Чат</span></Link>
      {' '}
      <Link to="/profile/reviews"><span className="span">Отзывы</span></Link>
      {' '}
      <Link to="/profile/settings"><span className="span">Настройки</span></Link>
    </div>
  );
}
