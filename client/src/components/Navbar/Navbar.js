import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ auth }) {
  const authLinks = () => (
    <div>
      <Link to="/">
        {' '}
        <span>{auth.name}</span>
        {' '}
      </Link>
    </div>
  );

  const notAuthLinks = () => (
    <div className="containerAvtReg">
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
  );
  return (
    <nav>
      <div>
        <Link to="/"><span>Pet&Travel</span></Link>
      </div>
      <div>
        <Link to="/aboutus"><span>О нас</span></Link>
      </div>
      {auth ? authLinks() : notAuthLinks()}
    </nav>
  );
}
