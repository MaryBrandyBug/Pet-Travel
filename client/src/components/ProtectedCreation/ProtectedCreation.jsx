import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedCreation({ redirectPass = '/profile' }) {
  // const auth = useSelector((store) => store.userStore.auth);
  const sitter = useSelector((store) => store.parentStore.profile);
  const parent = useSelector((store) => store.sitterStore.sitter);
  if (parent || sitter) {
    return <Navigate to={redirectPass} replace />;
  }
  return (
    <Outlet />
  );
}
