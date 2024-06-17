import {
  PiCoffeeFill,
  PiPackageFill,
  PiShoppingCartFill,
  PiTimerFill,
} from "react-icons/pi";

import homeImage from "/home-image.png";

import { CoffeeCard } from "../components/coffeeCard";
import { coffeesData } from "../constants/coffeesData";

export function Home() {
  return (
    <div className="w-[70rem] mx-auto px-4">
      <main>
        <section className="flex items-center gap-14 mt-24">
          <div className="w-[40rem] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold font-baloo text-5xl">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-xl">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-600 p-2 rounded-full">
                  <PiShoppingCartFill className="text-white" />
                </div>
                <span>Compra simples e segura</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-zinc-700 p-2 rounded-full">
                  <PiPackageFill className="text-white" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-yellow-500 p-2 rounded-full">
                  <PiTimerFill className="text-white" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-purple-500 p-2 rounded-full">
                  <PiCoffeeFill className="text-white" />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>

          <div className="w-[30rem]">
            <img
              src={homeImage}
              alt="Imagem de um copo de café para delivery"
            />
          </div>
        </section>

        <section className="flex flex-col gap-14 pt-24">
          <h2 className="font-extrabold font-baloo text-4xl">Nossos cafés</h2>

          <div className="grid grid-cols-4 gap-8 mb-24">
            {coffeesData.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                title={coffee.title}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
