import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";

import {
  PiMinusBold,
  PiPlusBold,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import { Coffee } from "../constants/coffeesData";

export function CoffeeCard({
  imgUrl,
  title,
  tags = [],
  description,
  price,
}: Coffee) {
  const { coffeesOnCart, setCoffeesOnCart } = useContext(CartContext);
  const [quantity, SetQuantity] = useState(1);

  function handleIncreaseQuantity() {
    SetQuantity(quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return;
    } else {
      SetQuantity(quantity - 1);
    }
  }

  function handleAddCoffeeToCart() {
    const existingCoffee = coffeesOnCart.find(
      (coffee: { title: string }) => coffee.title === title
    );

    if (existingCoffee) {
      const updatedCoffeesOnCart = coffeesOnCart.map(
        (coffee: { title: string; quantity: number }) =>
          coffee.title === title
            ? { ...coffee, quantity: coffee.quantity + quantity }
            : coffee
      );
      setCoffeesOnCart(updatedCoffeesOnCart);
    } else {
      const newCoffeeToCart = {
        id: title,
        title: title,
        imgUrl: imgUrl,
        quantity: quantity,
        price: price,
      };
      setCoffeesOnCart([...coffeesOnCart, newCoffeeToCart]);
    }
  }

  return (
    <div className="bg-zinc-200/40 px-6 py-5 rounded-lg rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
      <div className="flex flex-col gap-3 items-center text-center">
        <img src={imgUrl} alt="" className="w-[7.5rem] -mt-10" />

        <div className="flex gap-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-2 py-[2px] flex items-center bg-amber-200/50 rounded-full"
            >
              <span className="uppercase text-amber-600 text-[0.7rem] font-bold">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-baloo font-bold text-xl mb-1 ">{title}</h3>
          <p className="text-xs opacity-50">{description}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between ">
        <p className="text-sm opacity-70">
          R${" "}
          <span className="text-2xl font-baloo font-extrabold ">{price}</span>
        </p>

        <div className="flex gap-2 h-9">
          <div className="p-2 flex items-center gap-2 bg-zinc-200 rounded-md">
            <button
              onClick={handleDecreaseQuantity}
              className="text-purple-700"
            >
              <PiMinusBold />
            </button>

            <span>{quantity}</span>

            <button
              onClick={handleIncreaseQuantity}
              className="text-purple-700"
            >
              <PiPlusBold />
            </button>
          </div>

          <button
            onClick={handleAddCoffeeToCart}
            className="p-2 text-white bg-purple-800 rounded-md"
          >
            <PiShoppingCartSimpleFill className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
