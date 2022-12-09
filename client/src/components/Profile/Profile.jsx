import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import SitterProfile from '../SitterProfile/SitterProfile';
import './Profile.css';

export default function Profile() {
  const user = useSelector((store) => store.userStore);
  const sitter = useSelector((store) => store.sitterStore);
  console.log(sitter);
  return (
    <div>
      <div className="link_bar">
        <div className="left_menu">
          <div>
            {user?.role === 'parent'
              ? (
                <Link to="/profile/create-parent-profile">
                  <button type="button">Заполнить анкету</button>
                </Link>
              )
              : (
                <Link to="/profile/create-sitter-profile">
                  <button type="button">Заполнить анкету</button>
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
