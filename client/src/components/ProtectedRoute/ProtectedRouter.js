import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ redirectPass = '/' }) {
  const user = useSelector((store) => store.userStore);
  console.log(user);
  if (!user) {
    return <Navigate to={redirectPass} replace />;
  }
  return (
    <Outlet />
  );
}
