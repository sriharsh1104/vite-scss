import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../../Pages/Public/SignIn/SignIn";
import SignUp from "../../Pages/Public/SignUp/SignUp";

const PublicRoutes:any = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
};
export default PublicRoutes;
