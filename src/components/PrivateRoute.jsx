import { LOGIN_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated, selectIsRefresh } from 'redux/selectors/auth.selectors';

const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);
  const isRefresh = useSelector(selectIsRefresh);
  const start = !isRefresh && authenticated;

  return start ? children : <Navigate to={navigateTo} replace />
}

export default PrivateRoute;
