import "./Menu.css";
import MenuCard from "../../components/MenuCard/MenuCard";
function Menu({ menu, selectedCategory, setSelectedCategory }) {
  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu">
      <h1 className="menu__title">Menu</h1>
      <div className="menu__cards">
        {menu.categories.map((category, index) => (
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
