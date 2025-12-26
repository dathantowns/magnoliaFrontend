import "./MenuCategory.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";
import BackBtn from "../../components/BackBtn/BackBtn";
import { useParams } from "react-router-dom";

function MenuCategory({ menu, selectedCategory }) {
  if (!menu) {
    return <div>Loading...</div>;
  }

  if (!selectedCategory) {
    const { category } = useParams();
    selectedCategory = category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const navigate = useNavigate();
  console.log("selectedCategory in MenuCategory: ", selectedCategory);

  return (
    <div className="menu-category">
      <h1 className="menu-category__title">{selectedCategory}</h1>
      <BackBtn />
      <div className="menu-category__cards">
        {menu.categories
          .find((category) => category.title === selectedCategory)
          ?.products?.map((product, index) => (
            <MenuCard
              key={index}
              title={product.title}
              image={product.image}
              url={`/menu/${product.title.toLowerCase().replace(/ /g, "-")}/${
                product.id
              }`}
            />
          ))}
      </div>
    </div>
  );
}

export default MenuCategory;
