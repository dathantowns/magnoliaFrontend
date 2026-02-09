import "./ItemScreen.css";
import { useNavigate, useParams } from "react-router-dom";
import bagIcon from "../../assets/paper-bag.png";
import { useState, useEffect } from "react";
import arrowIcon from "../../assets/arrow.png";

function ItemScreen({ cart, setCart, selectedCategory, menu }) {
  const [size, setSize] = useState("M");
  const [animateCart, setAnimateCart] = useState(false);
  const [animateSize, setAnimateSize] = useState(false);
  const { id, category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setAnimateCart(true);
    const timeout = setTimeout(() => setAnimateCart(false), 500); // match animation duration
    return () => clearTimeout(timeout);
  }, [cart]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  if (!selectedCategory) {
    selectedCategory = category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  let item;

  for (const category of menu.categories) {
    item = category.products.find(
      (product) =>
        product.title.toLowerCase().replace(/ /g, "-") === id.toString(),
    );
    if (item) break;
  }

  if (!item) return <div>Item not found</div>;

  // Get price based on size for drinks
  const getPriceBySize = () => {
    if (selectedCategory === "Drinks") {
      return item[`price${size}`] || item.price;
    }
    return item.price;
  };

  const currentPrice = getPriceBySize();

  function handleAddToCart() {
    if (selectedCategory === "Drinks" && size === "") {
      setAnimateSize(true);
      setTimeout(() => setAnimateSize(false), 500);
      return;
    }

    const cartItem = {
      ...item,
      price: currentPrice,
      instanceId: Date.now() + Math.random(),
    };

    // Only add size property for drinks
    if (selectedCategory === "Drinks") {
      cartItem.size = size;
    }

    setCart([...cart, cartItem]);
    console.log(cart);
  }

  function handleSizeSelect(selectedSize) {
    setSize(selectedSize);
  }

  return (
    <div className="item-scrn">
      <div className="item-scrn__container">
        <img
          src={arrowIcon}
          alt="arrow-back"
          className="item-scrn__back-btn"
          onClick={() => navigate(-1)}
        />

        <img className="item-scrn__img" src={item.image} alt="" />
        <div className="item-scrn__name-price">
          <h1 className="item-scrn__title">{item.title}</h1>
          {selectedCategory === "Drinks" && (
            <p className="item-scrn__size-display">Size: {size}</p>
          )}
          <p className="item-scrn__price">${currentPrice}</p>
          <div className="item-scrn__btn" onClick={() => handleAddToCart()}>
            <img src={bagIcon} alt="" className="item-scrn__btn-img" />
            <p className="item__screen-btn-text">Add To Cart</p>
          </div>
        </div>
      </div>
      <div className="item-scrn__cart-container">
        {selectedCategory === "Drinks" && (
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
