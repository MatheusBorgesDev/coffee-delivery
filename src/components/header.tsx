import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartFill } from "react-icons/pi";

import logo from "/coffee-delivery-logo.svg";

export function Header() {
  return (
    <header className="py-8 w-[70rem] px-4 mx-auto flex justify-between items-center">
      <img src={logo} />

      <div className="flex gap-3">
        <div className="p-2 flex gap-1 items-center bg-purple-200 rounded-lg ">
          <FaLocationDot className="text-purple-500" />
          <p className="text-purple-700">Lages, SC</p>
        </div>

        <button className="p-2 bg-yellow-200 rounded-lg">
          <PiShoppingCartFill size={20} className="text-yellow-600" />
        </button>
      </div>
    </header>
  );
}
