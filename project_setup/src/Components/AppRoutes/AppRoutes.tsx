import { Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import SignIn from "../../Pages/Public/SignIn/SignIn";
import SignUp from "../../Pages/Public/SignUp/SignUp";
import Dashboard from "../../Pages/Private/Dashboard/Dashboard";
import Profile from "../../Pages/Private/Profile/Profile";
import Setting from "../../Pages/Private/Setting/Setting";
interface RoutesProps {
  isAuthenticated: boolean;
}

const AppRoutes: React.FC<RoutesProps> = ({ isAuthenticated }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Private Routes */}
      {isAuthenticated ? (
        <Route path="/app" element={<PrivateLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/signin" />} />
      )}

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
};

export default AppRoutes;
