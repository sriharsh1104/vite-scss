import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const PrivateLayout: any = () => (
  <div className="Private-layout">
    <Header />
    <div className="Content-layout">
      <SideBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
);
export default PrivateLayout;
