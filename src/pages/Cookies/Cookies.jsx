import "./Cookies.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockCookies } from "../../mockItemDB";
import { useNavigate } from "react-router-dom";

function Cookies() {
  const navigate = useNavigate();

  return (
    <div className="cookies">
      <h1 className="cookies__title">Cookies</h1>
      <div className="cookies__nav-container">
        <span className="cookies__nav" onClick={() => navigate("/menu")}>
          Menu /
        </span>
        <span className="cookies__nav"> Cookies</span>
      </div>
      <div className="cookies__cards">
        {mockCookies.map((cookie, index) => (
          <MenuCard
            key={index}
            title={cookie.title}
            img={cookie.img}
            url={`/cookies/${cookie.title.toLowerCase().replace(/ /g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cookies;
