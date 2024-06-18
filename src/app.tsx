import { useState } from "react";

import { CartContext } from "./contexts/cartContext";

import { Routes } from "./routes";

import { Header } from "./components/header";

export interface CoffeeOnCart {
  id: string;
  title: string;
  imgUrl: string;
  quantity: number;
  price: string;
}

export function App() {
  const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeOnCart[]>([
    {
      id: "expresso-tradicional",
      title: "Expresso Tradicional",
      imgUrl: "src/assets/coffees/expresso-tradicional.png",
      quantity: 1,
      price: "9,90",
    },
    {
      id: "latte",
      title: "Latte",
      imgUrl: "src/assets/coffees/latte.png",
      quantity: 1,
      price: "9,90",
    },
  ]);

  const coffeesAmount = coffeesOnCart.length;

  return (
    <CartContext.Provider
      value={{ coffeesOnCart, setCoffeesOnCart, coffeesAmount }}
    >
      <Header />
      <Routes />
    </CartContext.Provider>
  );
}
