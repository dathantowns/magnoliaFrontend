import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Drinks from "../../pages/Drinks/Drinks";
import Cookies from "../../pages/Cookies/Cookies";
import ItemScreen from "../ItemScreen/ItemScreen";
import Cart from "../../pages/Cart/Cart";
import Contact from "../../pages/Contact/Contact";

function Main({ cart, setCart }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/drinks" element={<Drinks />} />
        <Route path="/menu/cookies" element={<Cookies />} />
        <Route
          path="/:category/:itemSlug"
          element={<ItemScreen cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default Main;
