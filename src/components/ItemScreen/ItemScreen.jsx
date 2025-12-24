import "./ItemScreen.css";
import { useNavigate, useParams } from "react-router-dom";
import { mockCookies, mockDrinks } from "../../mockItemDB";
import bagIcon from "../../assets/paper-bag.png";
import { useState, useEffect } from "react";
import arrowIcon from "../../assets/arrow.png";

function ItemScreen({ cart, setCart }) {
  const [size, setSize] = useState("");
  const [animateCart, setAnimateCart] = useState(false);
  const [animateSize, setAnimateSize] = useState(false);
  const { category, itemSlug } = useParams();

  const navigate = useNavigate();

  let data;
  if (category === "cookies") data = mockCookies;
  else if (category === "drinks") data = mockDrinks;
  else return <div>Category not found</div>;

  const item = data.find(
    (i) => i.title.toLowerCase().replace(/ /g, "-") === itemSlug
  );

  if (!item) return <div>Item not found</div>;

  function handleAddToCart() {
    if (category === "drinks" && size === "") {
      setAnimateSize(true);
      const timeout = setTimeout(() => setAnimateSize(false), 500); // match animation duration
      return () => clearTimeout(timeout);
    }
    const cartItem = {
      ...item,
      size: size,
    };
    setCart([...cart, cartItem]);
    console.log(`${item.title} (${size}) added to cart`);
  }

  function handleSizeSelect(selectedSize) {
    setSize(selectedSize);
  }

  useEffect(() => {
    setAnimateCart(true);
    const timeout = setTimeout(() => setAnimateCart(false), 500); // match animation duration
    return () => clearTimeout(timeout);
  }, [cart]);

  return (
    <div className="item-scrn">
      <div className="item-scrn__container">
        <img
          src={arrowIcon}
          alt="arrow-back"
          className="item-scrn__back-btn"
          onClick={() => navigate(-1)}
        />

        <img className="item-scrn__img" src={item.img} alt="" />
        <div className="item-scrn__name-price">
          <h1 className="item-scrn__title">{item.title}</h1>
          <p className="item-scrn__price">${item.price}</p>
          <div className="item-scrn__btn" onClick={() => handleAddToCart()}>
            <img src={bagIcon} alt="" className="item-scrn__btn-img" />
            <p className="item__screen-btn-text">Add To Cart</p>
          </div>
        </div>
      </div>
      <div className="item-scrn__cart-container">
        {category === "drinks" && (
          <div className="item-scrn__size-menu">
            <h2 className="item-scrn__size-title">Size Options</h2>
            <div className="item-scrn__sizes">
              <div
                className={
                  size === "S"
                    ? "item-scrn__size-option item-scrn__size-option_active"
                    : `item-scrn__size-option${animateSize ? " grow" : ""}`
                }
                onClick={() => handleSizeSelect("S")}
              >
                S
              </div>
              <div
                className={
                  size === "M"
                    ? "item-scrn__size-option item-scrn__size-option_active"
                    : `item-scrn__size-option${animateSize ? " grow" : ""}`
                }
                onClick={() => handleSizeSelect("M")}
              >
                M
              </div>
              <div
                className={
                  size === "L"
                    ? "item-scrn__size-option item-scrn__size-option_active"
                    : `item-scrn__size-option${animateSize ? " grow" : ""}`
                }
                onClick={() => handleSizeSelect("L")}
              >
                L
              </div>
            </div>
          </div>
        )}
        <div className="item-scrn__cart-counter">
          {cart.length > 0 && (
            <div
              className={`item-scrn__cart-count${animateCart ? " grow" : ""}`}
            >
              {cart.length}
            </div>
          )}
          <img
            src={bagIcon}
            alt="bag"
            className="item-scrn__cart-btn-img"
            onClick={() => navigate("/cart")}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemScreen;
