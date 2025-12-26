import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import mockMenu from "./mockItemDB";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("App.jsx rendered");

  useEffect(() => {
    setMenu(mockMenu);
    console.log(`Menu loaded: ${mockMenu.categories}`);
  }, []);
  return (
    <>
      <Header cart={cart} />
      <Main
        cart={cart}
        setCart={setCart}
        menu={menu}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Footer />
    </>
  );
}

export default App;
