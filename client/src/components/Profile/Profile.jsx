import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.css';

export default function Profile() {
  const user = useSelector((store) => store.userStore.auth);

  return (
    <div>
      <div className="link_bar">
        <div className="left_menu">
          <div className="side_text">
            {user === 'parent'
              ? (
                <Link to="/profile/parent">
                  <span className="span">Мой профиль</span>
                </Link>
              )
              : (
                <Link to="/profile/sitter">
                  <span className="span">Мой профиль</span>
                </Link>
              )}
          </div>
          <Sidebar />
        </div>
        <div className="rigth_menu">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
