import "./Header.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../../utils/contexts/userContext";
import lightLogo from "../../assets/lightlogo.png";
import locIcon from "../../assets/location.png";

function Header({ setSeeLoginModal, setSeeRegisterModal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoggedIn, setUser, setIsLoggedIn, setToken } = useUser();

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

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
          <li className="header__nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        {/* <span className="header__loc">
          <NavLink to="/about">Find Location </NavLink>
          <img src={locIcon} alt="Location Icon" className="header__loc-icon" />
        </span>
        <div className="header__account-container">
          {isLoggedIn ? (
            <>
              <span className="header__user-greeting">
                Hello, {user?.name || user?.email || "User"}
              </span>
              <button className="header__btn" onClick={handleLogout}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="header__btn"
                onClick={() => setSeeRegisterModal(true)}
              >
                Join Now
              </button>
              <button
                className="header__btn header__btn_alt"
                onClick={() => setSeeLoginModal(true)}
              >
                Log In
              </button>
            </>
          )}
        </div> */}
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
