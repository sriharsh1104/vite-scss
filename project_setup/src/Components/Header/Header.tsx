import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavigation('/')}>
        <h1>Platform</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><div className="nav-link" onClick={() => handleNavigation('/')}>Home</div></li>
          <li><div className="nav-link" onClick={() => handleNavigation('/about')}>About</div></li>
          <li><div className="nav-link" onClick={() => handleNavigation('/services')}>Services</div></li>
          <li><div className="nav-link" onClick={() => handleNavigation('/contact')}>Contact</div></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
