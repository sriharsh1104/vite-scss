import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="sidebar-link" onClick={() => handleNavigation("/app/dashboard")}>
            Dashboard
          </div>
        </li>
        <li>
          <div
            className="sidebar-link"
            onClick={() => handleNavigation("/app/profile")}
          >
            Profile
          </div>
        </li>
        <li>
          <div
            className="sidebar-link"
            onClick={() => handleNavigation("/app/settings")}
          >
            Settings
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
