import "./Header.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import lightLogo from "../../assets/lightlogo.png";
import locIcon from "../../assets/location.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <span className="header__loc">
          <NavLink to="/about">Find Location </NavLink>
          <img src={locIcon} alt="Location Icon" className="header__loc-icon" />
        </span>
        <div className="header__account-container">
          <button className="header__btn">Join Now</button>
          <button className="header__btn header__btn_alt">Sign In</button>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="header__order">
          <h2 className="header__order-title">Discover your new favorite</h2>
          <button
            className="header__order-btn"
            onClick={() => navigate("/menu")}
          >
            Order Now
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
