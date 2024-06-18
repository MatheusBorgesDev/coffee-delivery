import { useEffect, useState } from "react";

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
  const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeOnCart[]>(() => {
    const savedCart = localStorage.getItem("coffeesOnCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const coffeesAmount = coffeesOnCart.length;

  useEffect(() => {
    localStorage.setItem("coffeesOnCart", JSON.stringify(coffeesOnCart));
  }, [coffeesOnCart]);

  return (
    <CartContext.Provider
      value={{ coffeesOnCart, setCoffeesOnCart, coffeesAmount }}
    >
      <Header />
      <Routes />
    </CartContext.Provider>
  );
}
