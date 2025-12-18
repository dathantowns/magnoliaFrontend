import "./MenuCard.css";
import { useNavigate } from "react-router-dom";

function MenuCard({ title, img, url }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(url);

  return (
    <>
      <div className="menu-card">
        <img
          src={img}
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
