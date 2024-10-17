import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      {pizzaData.map((pizza, index) => (
        <Pizza key={index} pizza={pizza} />
      ))}
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <img src={pizza.photoName} alt={pizza.name} />
      {/* <p>{pizza.soldOut ? "Sold Out" : `$${pizza.price}`}</p> */}
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
      hour >= openHour && hour < closeHour ? "We are open" : "We are closed";
    setStatusMessage(message);
  }, []);

  return (
    <footer>
      <p>{statusMessage}</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
