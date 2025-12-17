import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default Main;
