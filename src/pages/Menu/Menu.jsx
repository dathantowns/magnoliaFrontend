import "./Menu.css";
import MenuCard from "../../components/MenuCard/MenuCard";
function Menu({ menu, selectedCategory, setSelectedCategory }) {
  if (!menu) {
    return (
      <div className="menu loading">
        <div className="loading__container">
          <div className="loading__spinner">
            <div className="loading__cookie">
              <div className="loading__chip1"></div>
              <div className="loading__chip2"></div>
              <div className="loading__chip3"></div>
            </div>
            <div className="loading__crumbs">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p className="loading__text">Loading Menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="menu">
      <h1 className="menu__title">Menu</h1>
      <div className="menu__cards">
        {menu.categories
          .filter((category) => category.isAvailable === true)
          .map((category, index) => (
            <MenuCard
              key={index}
              title={category.title}
              image={category.image}
              url={`/menu/${category.title.toLowerCase().replace(/ /g, "-")}`}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
      </div>
    </div>
  );
}

export default Menu;
