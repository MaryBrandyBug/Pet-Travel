import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <Link to="/profile"><span className="span">Ваш профиль</span></Link>
      {' '}
      <Link to="/chat"><span className="span">Чат</span></Link>
      {' '}
      <Link to="/reviews"><span className="span">Отзывы</span></Link>
      {' '}
      <Link to="/settings"><span className="span">Настройки</span></Link>
    </div>
  );
}
