import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

import './Navbar.css';
import petImg from './Pet_1.png';

export default function Navbar() {
  const user = useSelector((store) => store.userStore?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', { credentials: 'include' })
      .then((res) => {
        if (res.status === 200) { dispatch({ type: 'USER_SIGNOUT', payload: {} }); }
      });
    navigate('/');
  };
  return (

    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={petImg} alt="logo" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className="findTestClass">

        <Link to="/all-sitters"><span>Ситтеры</span></Link>
        <Link to="/all-parents"><span>Владельцы</span></Link>
      </div>
      <div className="nav-links">
        <Link to="/"><span>Главная</span></Link>
        <Link to="/aboutus"><span>О нас</span></Link>

        {user
          ? (
            <div className="dropdown">
              <button type="button" className="dropbtn">{user?.name}</button>
              <div className="dropdown-content">
                <Sidebar />
              </div>
              <button type="button" onClick={handleLogout}>Выход</button>
            </div>

          )
          : (
            <div>
              <Link to="/signup">
                {' '}
                <span>Регистрация</span>
                {' '}
              </Link>
              <Link to="/signin">
                {' '}
                <span>Вход</span>
                {' '}
              </Link>
            </div>

          )}

          )
          : null}
        {user
          ? <div><button className="dropbtn" type="button" onClick={handleLogout}>Выход</button></div>
          : null}

      </div>
    </div>

  );
}
