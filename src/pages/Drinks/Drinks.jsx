import "./Drinks.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockDrinks } from "../../mockItemDB";
import { useNavigate } from "react-router-dom";

function Drinks() {
  const navigate = useNavigate();

  return (
    <div className="drinks">
      <h1 className="drinks__title">Drinks</h1>
      <div className="drinks__nav-container">
        <span className="drinks__nav" onClick={() => navigate("/menu")}>
          Menu /
        </span>
        <span className="drinks__nav"> Drinks</span>
      </div>
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
