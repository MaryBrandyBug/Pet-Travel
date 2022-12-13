import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

// import SitterProfile from '../SitterProfile/SitterProfile';
import './Profile.css';
import Map from '../Map/Map';

export default function Profile() {
  const user = useSelector((store) => store.userStore.auth);

  console.log(user);
  const sitter = useSelector((store) => store.sitterStore.sitter);
  console.log();

  return (
    <div className="container_profile">
      <div className="link_bar">
        <div className="left_menu">
          <div className="side_text">
            {user.role === 'parent'
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
        <Map sitter={sitter} />
      </div>
    </div>
  );
}
