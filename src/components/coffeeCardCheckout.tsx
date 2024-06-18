import { PiMinusBold, PiPlusBold, PiTrash } from "react-icons/pi";

import { Coffee } from "../constants/coffeesData";

import { Button } from "./button";

export function CoffeeCardCheckout({ imgUrl, title, price }: Coffee) {
  console.log(imgUrl);
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
          <span className="font-bold">R$ {price}</span>
        </div>

        <div className="flex gap-2">
          <div className="p-2 h-8 flex items-center gap-2 bg-zinc-200 rounded-md">
            <button className="text-purple-700">
              <PiMinusBold />
            </button>

            <span className="font-medium">1</span>

            <button className="text-purple-700">
              <PiPlusBold />
            </button>
          </div>

          <div>
            <Button className="h-8">
              <PiTrash size={16} className="text-purple-700" />
              Remover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
