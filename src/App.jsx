import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute"; 
import LogoutProtector from "./components/logoutProtector"; 
import "./App.css";

const App = () => {
  return (
    <div> 
      <NavBar />
      <Routes>
        {/* Prevent access to SignUp page if user is logged in */}
        <Route
          path="/"
          element={
            <LogoutProtector>
              <SignUp />
            </LogoutProtector>
          }
        />
        {/* Prevent access to Profile page if user is not logged in */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
