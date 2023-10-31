import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth, ...props }) => {
  return auth ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
