import { useContext } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartFill } from "react-icons/pi";

import { CartContext } from "../contexts/cartContext";

import logo from "/coffee-delivery-logo.svg";

export function Header() {
  const { coffeesAmount } = useContext(CartContext);

  return (
    <header className="py-8 w-[70rem] px-4 mx-auto flex justify-between items-center">
      <img src={logo} />

      <div className="flex gap-3">
        <div className="p-2 flex gap-1 items-center bg-purple-200 rounded-lg ">
          <FaLocationDot className="text-purple-500" />
          <p className="text-purple-700">Lages, SC</p>
        </div>

        <button className="p-2 bg-yellow-200 rounded-lg relative">
          <PiShoppingCartFill size={20} className="text-yellow-600" />
          {coffeesAmount !== 0 && (
            <div className="rounded-full bg-yellow-700 absolute top-[-7px] right-[-10px] text-white px-[6px] text-sm">
              {coffeesAmount}
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
