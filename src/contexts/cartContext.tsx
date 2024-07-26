import { ReactNode, createContext, useEffect, useState } from "react";

export interface CoffeeOnCart {
  id: string;
  title: string;
  imgUrl: string;
  quantity: number;
  price: string;
}

interface CartContextType {
  coffeesOnCart: CoffeeOnCart[];
  setCoffeesOnCart: React.Dispatch<React.SetStateAction<CoffeeOnCart[]>>;
  coffeesAmount: number;
  addCoffeeToCart: (coffee: CoffeeOnCart) => void;
  removeCoffeeFromCart: (id: string) => void;
  updateCoffeeQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeOnCart[]>(() => {
    const savedCart = localStorage.getItem("coffeesOnCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const coffeesAmount = coffeesOnCart.length;

  useEffect(() => {
    localStorage.setItem("coffeesOnCart", JSON.stringify(coffeesOnCart));
  }, [coffeesOnCart]);

  function addCoffeeToCart(coffee: CoffeeOnCart) {
    setCoffeesOnCart((prevCoffees) => {
      const existingCoffee = prevCoffees.find((c) => c.id === coffee.id);
      if (existingCoffee) {
        return prevCoffees.map((c) =>
          c.id === coffee.id
            ? { ...c, quantity: c.quantity + coffee.quantity }
            : c
        );
      }
      return [...prevCoffees, coffee];
    });
  }

  function removeCoffeeFromCart(id: string) {
    setCoffeesOnCart((prevCoffees) =>
      prevCoffees.filter((coffee) => coffee.id !== id)
    );
  }

  function updateCoffeeQuantity(id: string, quantity: number) {
    setCoffeesOnCart((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id ? { ...coffee, quantity } : coffee
      )
    );
  }

  function clearCart() {
    setCoffeesOnCart([]);
    localStorage.removeItem("coffeesOnCart");
  }

  return (
    <CartContext.Provider
      value={{
        coffeesOnCart,
        setCoffeesOnCart,
        coffeesAmount,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
