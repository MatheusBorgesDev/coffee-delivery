import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartFill } from "react-icons/pi";

import logo from "/coffee-delivery-logo.svg";

export function Header() {
  return (
    <header className="py-8 flex justify-between items-center">
      <img src={logo} />

      <div className="flex gap-3">
        <div className="p-2 flex gap-1 items-center bg-purple-200 rounded-lg">
          <FaLocationDot className="text-purple-500" />
          <p>Lages, SC</p>
        </div>

        <button className="py-2 px-3 bg-yellow-100 rounded-lg">
          <PiShoppingCartFill className="text-yellow-600 " />
        </button>
      </div>
    </header>
  );
}
