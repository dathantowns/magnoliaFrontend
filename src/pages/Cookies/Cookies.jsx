import "./Cookies.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockCookies } from "../../mockItemDB";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";

function Cookies() {
  const navigate = useNavigate();

  return (
    <div className="cookies">
      <h1 className="cookies__title">Cookies</h1>
      <img
        src={arrowIcon}
        alt="arrow-back"
        className="item-scrn__back-btn"
        onClick={() => navigate(-1)}
      />
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
