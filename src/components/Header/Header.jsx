import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

import lightLogo from "../../assets/lightlogo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <img
          src={lightLogo}
          alt="Dark Logo"
          className="header__logo"
          onClick={() => navigate("/")}
        />
        <ul className="header__nav">
          <li className="header__nav-item">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="header__nav-item">
            <a
              href="https://app.squareup.com/gift/MLNK2352HZ3VJ/order"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gift Card
            </a>
          </li>
          <li className="header__nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
