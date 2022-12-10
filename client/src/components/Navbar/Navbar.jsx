import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

import './Navbar.css';
import petImg from './Pet_1.png';

export default function Navbar() {
  const user = useSelector((store) => store.userStore);
  console.log(user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', { credentials: 'include' })
      .then((res) => {
        if (res.status === 200) { dispatch({ type: 'USER_SIGNOUT', payload: {} }); }
      });
  };
  return (

    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          {/* <Link to="/">
            </Link> */}
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

      <div className="nav-links">
        <Link to="/aboutus"><span>О нас</span></Link>
        {user?.auth
          ? (
            <div className="dropdown">
              <Link className="dropbtn" to={`/profile/${user?.auth.role}`}>
                <div className="dropdown-content">
                  <Sidebar />
                </div>
                <span>{user.auth.name}</span>
              </Link>
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
      </div>
    </div>

  );
}
