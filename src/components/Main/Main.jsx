import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import MenuCategory from "../../pages/MenuCategory/MenuCategory";
import ItemScreen from "../ItemScreen/ItemScreen";
import Cart from "../../pages/Cart/Cart";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";

function Main({ cart, setCart, menu, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              menu={menu}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route
          path="/menu/:product/:id"
          element={
            <ItemScreen
              cart={cart}
              setCart={setCart}
              selectedCategory={selectedCategory}
              menu={menu}
            />
          }
        />
        <Route
          path="/menu/:category"
          element={
            <MenuCategory selectedCategory={selectedCategory} menu={menu} />
          }
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Main;
