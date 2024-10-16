import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />;
      <Menu />
      <Footer />;
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const message =
      hour >= openHour && hour <= closeHour ? "We are open" : "We are closed";
    setStatusMessage(message);
  }, []);

  return (
    <footer>
      <p>{statusMessage}</p>
    </footer>
  );
}

// export default Footer;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);
//   return react.createElement(
//     "footer",
//     null,
//     "we're currently closed for a while"
//   );
//   return <h1>Fast React Pizza Co.</h1>;

function Pizza() {
  return (
    <div>
      <h2>Pizza Spinaci</h2>
      <h2>Tomato, mozarella, spinach, and ricotta cheese</h2>;
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci"></img>;
    </div>
  );
}
// adding a comment
// react v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
