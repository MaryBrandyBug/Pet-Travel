import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ auth }) {
  return (

    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/"><span>Pet&Travel</span></Link>
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
        {auth
          ? (

            <>
              <Link to="/">
                {' '}
                <span>{auth.name}</span>
                {' '}
              </Link>
              <Link to="/chat">
                {' '}
                <span>Чат</span>
                {' '}
              </Link>

            </>

          )
          : (
            <>
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
            </>
          )}
      </div>
    </div>

  );
}
