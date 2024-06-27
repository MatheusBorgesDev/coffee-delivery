import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

import { PiMinusBold, PiPlusBold, PiTrash } from "react-icons/pi";

import { Coffee } from "../constants/coffeesData";

import { Button } from "./button";

export function CoffeeCardCheckout({ imgUrl, price, title }: Coffee) {
  const { coffeesOnCart, removeCoffeeFromCart, updateCoffeeQuantity } =
    useContext(CartContext);

  const coffeeInCart = coffeesOnCart.find((item) => item.title === title);

  function handleIncreaseQuantity() {
    if (coffeeInCart) {
      updateCoffeeQuantity(coffeeInCart.id, coffeeInCart.quantity + 1);
    }
  }

  function handleDecreaseQuantity() {
    if (coffeeInCart && coffeeInCart.quantity > 1) {
      updateCoffeeQuantity(coffeeInCart.id, coffeeInCart.quantity - 1);
    }
  }

  function handleRemoveCoffeeOfCart() {
    if (coffeeInCart) {
      removeCoffeeFromCart(coffeeInCart.id);
    }
  }

  const total = coffeeInCart
    ? parseFloat(price.replace(",", ".")) * coffeeInCart.quantity
    : 0;

  return (
    <div className="flex gap-5 border-b pb-6">
      <img
        src={imgUrl}
        alt={`Foto de uma xícara de ${title}`}
        className="w-16 h-16"
      />
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <span>{title}</span>
          <span className="font-bold">R$ {total.toFixed(2)}</span>
        </div>
        <div className="flex gap-2">
          <div className="p-2 h-8 flex items-center gap-2 bg-zinc-200 rounded-md">
            <button
              onClick={handleDecreaseQuantity}
              className="text-purple-700"
            >
              <PiMinusBold />
            </button>
            <span className="font-medium">{coffeeInCart?.quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-purple-700"
            >
              <PiPlusBold />
            </button>
          </div>
          <div>
            <Button onClick={handleRemoveCoffeeOfCart} className="h-8">
              <PiTrash size={16} className="text-purple-700" />
              Remover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
