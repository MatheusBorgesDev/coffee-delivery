import { CartProvider } from "./contexts/cartContext";

import { Routes } from "./routes";

import { Header } from "./components/header";

export function App() {
  return (
    <CartProvider>
      <Header />
      <Routes />
    </CartProvider>
  );
}
