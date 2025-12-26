import smoreCookieImg from "./assets/smoreCookie.jpg";
import oreoImg from "./assets/oreoCookie.png";
import chocolateCookie from "./assets/darkCookie.png";
import biscoffCookie from "./assets/biscoffCookie.jpg";
import peppermintImg from "./assets/drink1.png";
import latteImg from "./assets/drink2.png";
import snickersImg from "./assets/drink3.jpeg";
import macchiatoImg from "./assets/drink4.jpeg";

const mockCookies = [
  {
    id: 1,
    title: "S'mores Cookie",
    image: smoreCookieImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 9,
  },
  {
    id: 2,
    title: "Stuffed Oreo Cookie",
    image: oreoImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 9,
  },
  {
    id: 3,
    title: "Chocolate Cookie",
    image: chocolateCookie,
    price: 9.99,
    isAvailable: true,
    categoryId: 9,
  },
  {
    id: 4,
    title: "Biscoff Cookie",
    image: biscoffCookie,
    price: 9.99,
    isAvailable: true,
    categoryId: 9,
  },
];

const mockDrinks = [
  {
    id: 5,
    title: "Peppermint Chocolate Shake",
    image: peppermintImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 10,
  },
  {
    id: 6,
    title: "Iced Latte",
    image: latteImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 10,
  },
  {
    id: 7,
    title: "Snickers Chocolate Milk",
    image: snickersImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 10,
  },
  {
    id: 8,
    title: "Caramel Iced Macchiato",
    image: macchiatoImg,
    price: 9.99,
    isAvailable: true,
    categoryId: 10,
  },
];

const mockCategories = [
  { id: 9, title: "Cookies", image: smoreCookieImg, products: mockCookies },
  { id: 10, title: "Drinks", image: peppermintImg, products: mockDrinks },
  // { id: 12, title: "Specials", image: latteImg, products: mockDrinks },
];

const mockMenu = {
  id: 11,
  title: "Main Menu",
  categories: mockCategories,
};

export default mockMenu;
