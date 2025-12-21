import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Main cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}

export default App;
