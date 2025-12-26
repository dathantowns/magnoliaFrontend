import "./BackBtn.css";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <img
      src={arrowIcon}
      alt="arrow-back"
      className="back-btn"
      onClick={() => navigate(-1)}
    />
  );
}

export default BackBtn;
