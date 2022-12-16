import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.css';

export default function Profile() {
  return (
    <div className="container_profile">
      <div className="link_bar">
        <div className="left_menu">
          <Sidebar />
        </div>
        <div className="rigth_menu">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
