import "./Menu.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import cookiesImage from "../../assets/smoreBatch.png";
import drinksImage from "../../assets/drink1.png";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu__title">Menu</h1>
      <div className="menu__cards">
        <MenuCard title="Cookies" img={cookiesImage} url="/menu/cookies" />
        <MenuCard title="Drinks" img={drinksImage} url="/menu/drinks" />
      </div>
    </div>
  );
}

export default Menu;
