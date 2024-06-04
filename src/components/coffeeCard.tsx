import {
  PiMinusBold,
  PiPlusBold,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";

import coffeeImage from "../assets/coffees/expresso.png";

export function CoffeeCard() {
  return (
    <div className="bg-zinc-200/40 px-6 py-5 rounded-lg rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
      <div className="flex flex-col gap-3 items-center text-center">
        <img src={coffeeImage} alt="" className="w-[7.5rem] -mt-10" />

        <div className="px-2 py-[2px] flex items-center bg-amber-200/50 rounded-full">
          <span className="uppercase text-amber-600 text-[0.7rem] font-bold">
            tradicional
          </span>
        </div>

        <div>
          <h3 className="font-baloo font-bold text-xl mb-1 ">
            Expresso Tradicional
          </h3>

          <p className="text-sm opacity-50">
            O tradicional café feito com água quente e grãos moídos
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between ">
        <p className="text-sm opacity-70">
          R$ <span className="text-2xl font-baloo font-extrabold ">9,90</span>
        </p>

        <div className="flex gap-2 h-9">
          <div className="p-2 flex items-center gap-2 bg-zinc-200 rounded-md">
            <button className="text-purple-700">
              <PiMinusBold />
            </button>

            <span>1</span>

            <button className="text-purple-700">
              <PiPlusBold />
            </button>
          </div>

          <button className="p-2 text-white bg-purple-800 rounded-md">
            <PiShoppingCartSimpleFill className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
