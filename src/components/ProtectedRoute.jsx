import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.signUp.user);

  // If user is not logged in, redirect to the sign-up page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If user is logged in, allow access to the profile page
  return children;
};

export default ProtectedRoute;
