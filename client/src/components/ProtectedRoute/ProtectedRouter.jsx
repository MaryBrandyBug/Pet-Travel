import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ redirectPass = '/' }) {
  const auth = useSelector((store) => store.userStore.auth);
  if (auth) {
    return <Navigate to={redirectPass} replace />;
  }
  return (
    <Outlet />
  );
}
