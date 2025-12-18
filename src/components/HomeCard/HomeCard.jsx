import "./HomeCard.css";

function HomeCard({
  title,
  text,
  buttonText,
  onButtonClick,
  imgSrc,
  imgAlt,
  color,
  variant = "",
}) {
  return (
    <div
      className={`home__card ${variant && `home__card_${variant}`}`}
      style={color ? { backgroundColor: color } : undefined}
    >
      {!variant && <img src={imgSrc} alt={imgAlt} className="home__card-img" />}
      <div
        className={`home__card-content ${
          variant && `home__card-content_${variant}`
        }`}
      >
        <span className="home__card-title">{title}</span>
        <span className="home__card-text">{text}</span>
        <button
          className={`home__card-btn ${variant && `home__card-btn_${variant}`}`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      {variant && <img src={imgSrc} alt={imgAlt} className="home__card-img" />}
    </div>
  );
}

export default HomeCard;
