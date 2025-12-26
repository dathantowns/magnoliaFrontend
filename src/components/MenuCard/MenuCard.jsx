import "./MenuCard.css";
import { useNavigate } from "react-router-dom";

function MenuCard({ title, image, url, setSelectedCategory, categoryId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
    setSelectedCategory(title);
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
