import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
        <img src={petImg} alt="logo" />
      </div>
      <div className="findTestClass">
        <div>
          <Link to="/all-sitters"><span>Ситтеры</span></Link>
        </div>
        <div>
          <Link to="/all-parents"><span>Владельцы</span></Link>
        </div>
        <div>
          <Link to="/aboutus"><span>О нас</span></Link>
        </div>
        {user
          ? (
            <div className="a">
              {user?.role === 'parent'
                ? <Link className="dropbtn" to={`/profile/${user?.role}`}>Мой профиль</Link>
                : <Link className="dropbtn" to={`/profile/${user?.role}`}>Мой профиль</Link>}
            </div>

          )
          : (null)}
        {!user
          ? (
            <div>
              <Link to="/signup">Регистрация</Link>
            </div>
          )
          : null}
        {!user
          ? (
            <div>
              <Link to="/signin">Вход</Link>
            </div>
          )
          : null}
        {user
          ? <div><button className="dropbtn" type="button" onClick={handleLogout}>Выход</button></div>
          : null}

      </div>

    </div>

  );
}
