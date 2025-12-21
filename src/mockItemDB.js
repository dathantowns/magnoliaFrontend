import smoreCookieImg from "./assets/smoreCookie.jpg";
import oreoImg from "./assets/oreoCookie.png";
import chocolateCookie from "./assets/darkCookie.png";
import biscoffCookie from "./assets/biscoffCookie.jpg";
import peppermintImg from "./assets/drink1.png";
import latteImg from "./assets/drink2.png";
import snickersImg from "./assets/drink3.jpeg";
import macchiatoImg from "./assets/drink4.jpeg";

const mockCookies = [
  { title: "S'mores Cookie", img: smoreCookieImg, price: 9.99 },
  { title: "Stuffed Oreo Cookie", img: oreoImg, price: 9.99 },
  { title: "Chocolate Cookie", img: chocolateCookie, price: 9.99 },
  { title: "Biscoff Cookie", img: biscoffCookie, price: 9.99 },
];

const mockDrinks = [
  { title: "Peppermint Chocolate Shake", img: peppermintImg, price: 9.99 },
  { title: "Iced Latte", img: latteImg, price: 9.99 },
  { title: "Snickers Chocolate Milk", img: snickersImg, price: 9.99 },
  { title: "Caramel Iced Macchiato", img: macchiatoImg, price: 9.99 },
];

export { mockCookies, mockDrinks };
