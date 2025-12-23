import "./Drinks.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockDrinks } from "../../mockItemDB";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";

function Drinks() {
  const navigate = useNavigate();

  return (
    <div className="drinks">
      <h1 className="drinks__title">Drinks</h1>
      <img
        src={arrowIcon}
        alt="arrow-back"
        className="item-scrn__back-btn"
        onClick={() => navigate(-1)}
      />
      <div className="drinks__cards">
        {mockDrinks.map((drink, index) => (
          <MenuCard
            key={index}
            title={drink.title}
            img={drink.img}
            url={`/drinks/${drink.title.toLowerCase().replace(/ /g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
