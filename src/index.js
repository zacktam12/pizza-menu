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
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are currently working on the menu please come back later</p>
      )}

      {/* <div>
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
      </div>
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato ,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="pizza spinaci" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 13;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour < closeHour) alert("We are open");
  // else alert(" Sorry We are closed");
  if (!isOpen)
    return (
      <p className="footer">
        We are Happy to welCome you between {openHour}:00 and {closeHour}:00
        please come back later{" "}
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open from {openHour}:00 until {closeHour}:00 You can order us
            online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are Happy to welCome you between {openHour}:00 and {closeHour}:00
          please come back later{" "}
        </p>
      )}
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
