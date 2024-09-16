import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LogoutProtector = ({ children }) => {
  const user = useSelector((state) => state.signUp.user);

  // If user is logged in, redirect to the profile page
  if (user) {
    return <Navigate to="/profile" />;
  }

  // If user is not logged in, allow access to the sign-up page
  return children;
};

export default LogoutProtector;
