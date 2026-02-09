import "./Cart.css";
import trashIcon from "../../assets/trash.png";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { sendOrder } from "../../../utils/api";
import { useState } from "react";

function Cart({ cart, setCart }) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  function handleRemoveItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function handlePlaceOrder() {
    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    if (!customerPhone.trim()) {
      setPhoneError(true);
      return;
    }

    const orderData = {
      items: cart,
      customerName: customerName,
      customerPhone: customerPhone,
    };
    sendOrder(orderData)
      .then((response) => {
        console.log("Order placed successfully:", response);
        setCart([]);
        setOrderSuccess(true);
        setCustomerName("");
        setCustomerPhone("");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  }

  function handleNewOrder() {
    setOrderSuccess(false);
    navigate("/menu");
  }

  const navigate = useNavigate();

  const isEmpty = cart.length === 0;

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <img
        src={arrowIcon}
        alt="arrow-back"
        className="item-scrn__back-btn"
        onClick={() => navigate(-1)}
      />
      {isEmpty || orderSuccess ? (
        <>
          <p className="cart__empty-description">
            {orderSuccess
              ? "Order completed Successfully"
              : "Your cart is empty."}
          </p>
          {orderSuccess && (
            <>
              <p className="cart__pickup-noitfication">
                PAYMENT DUE UPON ARRIVAL.
              </p>
              <p className="cart__pickup-address">
                Pickup at: 9701 Rosedale Hwy, Bakersfield, CA 93312
              </p>
            </>
          )}
          <button className="cart__order-btn" onClick={handleNewOrder}>
            Order Now
          </button>
        </>
      ) : (
        <div className="cart__details">
          <TransitionGroup component="ul" className="cart__items">
            {cart.map((item, index) => (
              <CSSTransition
                key={item.instanceId}
                timeout={300}
                classNames="fade"
              >
                <li className="cart__item">
                  <img
                    src={trashIcon}
                    alt="trash"
                    className="cart__item-trash-btn"
                    onClick={() => handleRemoveItem(index)}
                  />
                  <img
                    src={item.image}
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
              </CSSTransition>
            ))}
          </TransitionGroup>
          <div className="cart__total">
            <h2 className="cart__total-text">
              Total: $
              {cart
                .reduce((total, item) => total + parseFloat(item.price), 0)
                .toFixed(2)}
            </h2>
            <div className="cart__name-input-container">
              <input
                type="text"
                placeholder="Enter your name"
                className={`cart__name-input ${nameError ? "cart__name-input_error" : ""}`}
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  setNameError(false);
                }}
              />
              {nameError && (
                <p className="cart__name-error">Please enter your name</p>
              )}
              <input
                type="tel"
                placeholder="Enter your phone number"
                className={`cart__name-input ${phoneError ? "cart__name-input_error" : ""}`}
                value={customerPhone}
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                  setPhoneError(false);
                }}
              />
              {phoneError && (
                <p className="cart__phone-error">
                  Please enter your phone number
                </p>
              )}
            </div>
            <button className="cart__btn" onClick={handlePlaceOrder}>
              Place Order For Pickup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
