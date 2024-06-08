import {
  PiCoffeeFill,
  PiPackageFill,
  PiShoppingCartFill,
  PiTimerFill,
} from "react-icons/pi";

import homeImage from "/home-image.png";
import { CoffeeCard } from "./components/coffeeCard";

interface Coffee {
  imgUrl: string;
  title: string;
  tags: string[];
  description: string;
}

const coffeesData: Coffee[] = [
  {
    imgUrl: "../src/assets/coffees/expresso.png",
    title: "Expresso Tradicional",
    tags: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
  },

  {
    imgUrl: "../src/assets/coffees/expresso-americano.png",
    title: "Expresso Americano",
    tags: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
  },

  {
    imgUrl: "../src/assets/coffees/expresso-cremoso.png",
    title: "Expresso Cremoso",
    tags: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
  },

  {
    imgUrl: "../src/assets/coffees/expresso-gelado.png",
    title: "Expresso Gelado",
    tags: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
  },

  {
    imgUrl: "../src/assets/coffees/cafe-com-leite.png",
    title: "Café com Leite",
    tags: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
  },

  {
    imgUrl: "../src/assets/coffees/latte.png",
    title: "Latte",
    tags: ["tradicional", "com leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },

  {
    imgUrl: "../src/assets/coffees/capuccino.png",
    title: "Capuccino",
    tags: ["tradicional", "com leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },

  {
    imgUrl: "../src/assets/coffees/macchiato.png",
    title: "Macchiato",
    tags: ["tradicional", "com leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
  },

  {
    imgUrl: "../src/assets/coffees/mocaccino.png",
    title: "Mocaccino",
    tags: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
  },

  {
    imgUrl: "../src/assets/coffees/chocolate-quente.png",
    title: "Chocolate Quente",
    tags: ["especial", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
  },

  {
    imgUrl: "../src/assets/coffees/cubano.png",
    title: "Cubano",
    tags: ["especial", "alcoólico", "gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },

  {
    imgUrl: "../src/assets/coffees/havaiano.png",
    title: "Havaiano",
    tags: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
  },

  {
    imgUrl: "../src/assets/coffees/arabe.png",
    title: "Árabe",
    tags: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
  },

  {
    imgUrl: "../src/assets/coffees/irlandes.png",
    title: "Irlandês",
    tags: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];

export function App() {
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
                key={coffee.title}
                imgUrl={coffee.imgUrl}
                title={coffee.title}
                tags={coffee.tags}
                description={coffee.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
