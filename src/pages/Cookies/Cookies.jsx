import "./Cookies.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import mockCookies from "../../../utils/mockItemDB";

function Cookies() {
  return (
    <div className="cookies">
      <h1 className="cookies__title">Cookies</h1>
      <div className="cookies__cards"></div>
    </div>
  );
}

export default Cookies;
