import "./MenuCard.css";
import { useNavigate } from "react-router-dom";

function MenuCard({
  title,
  image,
  url,
  setSelectedCategory,
  categoryId,
  isSubcategory,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSubcategory && setSelectedCategory) {
      // For subcategories, we want to keep the parent category selected
      setSelectedCategory(title);
    } else if (setSelectedCategory) {
      setSelectedCategory(title);
    }
    navigate(url);
  };

  return (
    <>
      <div className="menu-card">
        <img
          src={image}
          alt={title}
          className="menu-card__image"
          onClick={handleClick}
        />

        <h2 className="menu-card__title">{title}</h2>
      </div>
    </>
  );
}

export default MenuCard;
