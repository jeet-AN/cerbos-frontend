import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { hasRole } from 'src/utils/permissionUtils';
import { RootState } from 'src/store';
import { SuspenseErrorBoundary } from './SuspenseErrorBoundary';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[]; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    let userInfo = useSelector((state: RootState) => state.auth.userInfo);

  if (!hasRole(allowedRoles, userInfo?.role)) {
    return <Navigate to="/access-deny" />;
  }

  return <SuspenseErrorBoundary>{children}</SuspenseErrorBoundary>;
};

export default ProtectedRoute;
