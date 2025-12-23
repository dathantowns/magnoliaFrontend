import "./Cart.css";
import trashIcon from "../../assets/trash.png";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";

function Cart({ cart, setCart }) {
  function handleRemoveItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <img
        src={arrowIcon}
        alt="arrow-back"
        className="item-scrn__back-btn"
        onClick={() => navigate(-1)}
      />
      {cart.length === 0 ? (
        <p className="cart__empty-description">Your cart is empty.</p>
      ) : (
        <div className="cart__details">
          <ul className="cart__items">
            {cart.map((item, index) => (
              <li key={index} className="cart__item">
                <img
                  src={trashIcon}
                  alt="trash"
                  className="cart__item-trash-btn"
                  onClick={() => handleRemoveItem(index)}
                />
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart__item-img"
                />
                <div className="cart__item-details">
                  <h2 className="cart__item-title">{item.title}</h2>
                  {item.size && (
                    <p className="cart__item-size">Size: {item.size}</p>
                  )}
                  <p className="cart__item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <h2 className="cart__total-text">
              Total: $
              {cart
                .reduce((total, item) => total + parseFloat(item.price), 0)
                .toFixed(2)}
            </h2>
            <button className="cart__btn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
