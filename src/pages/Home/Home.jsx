import "./Home.css";
import GiftCardImg from "../../assets/giftCardPic.png";
import smoreImg from "../../assets/smoreBatch.png";
import HomeCard from "../../components/HomeCard/HomeCard";
import assBatch from "../../assets/assortedBatch.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <HomeCard
        imgSrc={GiftCardImg}
        imgAlt="Gift Card"
        title="GIFT CARDS AVAILABLE FOR A LIMITED TIME!"
        text="Treat someone special to a taste they’ll love. With our gift cards, you’re giving more than food — you’re giving an experience."
        buttonText="Buy A Gift Card"
        onButtonClick={() =>
          openInNewTab("https://app.squareup.com/gift/MLNK2352HZ3VJ/order")
        }
        color="#819981"
      />
      <HomeCard
        imgSrc={smoreImg}
        imgAlt="Smore Img"
        title="YOUR FAVORITES, READY TO GO!"
        text="Skip the wait! Place your pickup order and we’ll have everything
        ready and waiting when you arrive."
        buttonText="Start An Order"
        color="#eba158"
        onButtonClick={() => navigate("/menu")}
        variant="reverse"
      />
      <HomeCard
        imgSrc={assBatch}
        imgAlt="Gift Card"
        title="Earn Rewards"
        text="Earn rewards every time you order. The more you enjoy your favorites, the more perks you unlock."
        buttonText="Rewards"
        onButtonClick={() => navigate("/rewards")}
        color="#819981"
      />
    </>
  );
}

export default Home;
