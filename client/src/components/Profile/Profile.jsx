import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

// import SitterProfile from '../SitterProfile/SitterProfile';
import './Profile.css';
// import Map from '../Map/Map';

export default function Profile() {
  const user = useSelector((store) => store.userStore.auth);

  console.log(user);
  // const sitter = useSelector((store) => store.sitterStore.sitter);
  console.log();

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
