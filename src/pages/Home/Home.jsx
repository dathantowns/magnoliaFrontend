import "./Home.css";
import GiftCardImg from "../../assets/giftCardPic.png";
import smoreImg from "../../assets/smoreBatch.png";

function Home() {
  return (
    <>
      <div className="home__order">
        <h2 className="home__order-title">Discover your new favorite</h2>
        <button className="home__order-btn">Order Now</button>
      </div>
      <div className="home__card home__card_gift">
        <img src={GiftCardImg} alt="Gift Card" className="home__card-img" />
        <div className="home__card-content">
          <span className="home__card-title">
            GIFT CARDS AVAILABLE FOR A LIMITED TIME!
          </span>
          <span className="home__card-text">
            Treat someone special to a taste they’ll love. With our gift cards,
            you’re giving more than food — you’re giving an experience.
          </span>
          <button className="home__card-btn">Buy A Gift Card</button>
        </div>
      </div>
      <div className="home__card home__card_order">
        <div className="home__card-content home__card-content_reverse">
          <span className="home__card-title">YOUR FAVORITES, READY TO GO!</span>
          <span className="home__card-text">
            Skip the wait! Place your pickup order and we’ll have everything
            ready and waiting when you arrive.
          </span>
          <button className="home__card-btn home__card-btn_order">
            Start An Order
          </button>
        </div>
        <img src={smoreImg} alt="Gift Card" className="home__card-img" />
      </div>
    </>
  );
}

export default Home;
