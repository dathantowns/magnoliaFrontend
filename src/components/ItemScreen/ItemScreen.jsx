import "./ItemScreen.css";
import { useParams } from "react-router-dom";
import { mockCookies, mockDrinks } from "../../mockItemDB";
import bagIcon from "../../assets/paper-bag.png";

function ItemScreen({ cart, setCart }) {
  const { category, itemSlug } = useParams();

  let data;
  if (category === "cookies") data = mockCookies;
  else if (category === "drinks") data = mockDrinks;
  else return <div>Category not found</div>;

  const item = data.find(
    (i) => i.title.toLowerCase().replace(/ /g, "-") === itemSlug
  );

  if (!item) return <div>Item not found</div>;

  function handleAddToCart() {
    setCart([...cart, item]);
    console.log(`${item.title}, ${item.price} is in the cart`);
  }

  return (
    <div className="item-scrn">
      <div className="item-scrn__container">
        <img className="item-scrn__img" src={item.img} alt="" />
        <div className="item-scrn__name-price">
          <h1 className="item-scrn__title">{item.title}</h1>
          <p className="item-scrn__price">${item.price}</p>
          <div className="item-scrn__btn">
            <img
              src={bagIcon}
              alt=""
              className="item-scrn__btn-img"
              onClick={() => handleAddToCart()}
            />
          </div>
        </div>
      </div>
      <div className="item-scrn__cart-container"></div>
    </div>
  );
}

export default ItemScreen;
