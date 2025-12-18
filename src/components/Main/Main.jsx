import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Drinks from "../../pages/Drinks/Drinks";
import Cookies from "../../pages/Cookies/Cookies";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/drinks" element={<Drinks />} />
        <Route path="/menu/cookies" element={<Cookies />} />
      </Routes>
    </>
  );
}

export default Main;
