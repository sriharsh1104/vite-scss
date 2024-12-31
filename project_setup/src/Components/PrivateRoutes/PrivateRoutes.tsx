import { Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import Dashboard from "../../Pages/Private/Dashboard/Dashboard";
import Setting from "../../Pages/Private/Setting/Setting";
import Profile from "../../Pages/Private/Profile/Profile";

const PrivateRoutes: any = () => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <PrivateLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </PrivateLayout>
  ) : (
    <Navigate to="/signin" />
  );
};
export default PrivateRoutes;
