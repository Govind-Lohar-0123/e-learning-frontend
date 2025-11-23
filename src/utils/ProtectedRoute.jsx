import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../const';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userRole, setUserRole] = useState('User');

  useEffect(() => {
    let token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
      setIsLoggedIn(true);
      let role = localStorage.getItem(STORAGE_KEYS.USER_ROLE);
      setUserRole(role);
    }
  });

  if (!isLoggedIn) {
    <Navigate to="/login" replace />;
  }
  if (isLoggedIn && userRole == 'Admin') {
    <Navigate to="/admin" replace />;
  }

  return children;
}
