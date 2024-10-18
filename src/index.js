import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div claasName="container">
      <Header />
      <Menu />
      {/* <Pizza />
      <Pizza /> */}

      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: " uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <div>
        <h2>Our menu</h2>
        <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato, mozzarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
      </div>
      <Pizza
        name="Pizza funghi"
        ingredient="Tomato ,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza funghi"
        ingredient="Tomato ,mushrooms"
        price={12}
        photoName="pizzas/salamino.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="pizza spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour < closeHour) alert("We are open");
  else alert(" Sorry We are closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently Open
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
