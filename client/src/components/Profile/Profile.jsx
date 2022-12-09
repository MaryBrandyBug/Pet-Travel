import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

export default function Profile() {
  const user = useSelector((store) => store.userStore);
  return (
    <div>
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
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
