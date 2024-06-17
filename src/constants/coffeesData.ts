export interface Coffee {
  id: string;
  title: string;
  tags: string[];
  description: string;
  price: string;
}

const coffeesImgUrl = "../src/assets/coffees/";

function createCoffee(
  imgUrl: string,
  title: string,
  tags: string[],
  description: string,
  price: string
): Coffee {
  return {
    id: `${coffeesImgUrl}${imgUrl}.png`,
    title,
    tags,
    description,
    price,
  };
}

export const coffeesData: Coffee[] = [
  createCoffee(
    "expresso-tradicional",
    "Expresso Tradicional",
    ["tradicional"],
    "O tradicional café feito com água quente e grãos moídos",
    "4,90"
  ),
  createCoffee(
    "expresso-americano",
    "Expresso Americano",
    ["tradicional"],
    "Expresso diluído, menos intenso que o tradicional",
    "5,40"
  ),
  createCoffee(
    "expresso-cremoso",
    "Expresso Cremoso",
    ["tradicional"],
    "Café expresso tradicional com espuma cremosa",
    "6,90"
  ),
  createCoffee(
    "expresso-gelado",
    "Expresso Gelado",
    ["tradicional", "gelado"],
    "Bebida preparada com café expresso e cubos de gelo",
    "5,10"
  ),
  createCoffee(
    "cafe-com-leite",
    "Café com Leite",
    ["tradicional", "com leite"],
    "Meio a meio de expresso tradicional com leite vaporizado",
    "7,90"
  ),
  createCoffee(
    "latte",
    "Latte",
    ["tradicional", "com leite"],
    "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "8,90"
  ),
  createCoffee(
    "capuccino",
    "Capuccino",
    ["tradicional", "com leite"],
    "Bebida com canela feita de doses iguais de café, leite e espuma",
    "8,90"
  ),
  createCoffee(
    "macchiato",
    "Macchiato",
    ["tradicional", "com leite"],
    "Café expresso misturado com um pouco de leite quente e espuma",
    "8,90"
  ),
  createCoffee(
    "mocaccino",
    "Mocaccino",
    ["tradicional", "com leite"],
    "Café expresso com calda de chocolate, pouco leite e espuma",
    "9,90"
  ),
  createCoffee(
    "chocolate-quente",
    "Chocolate Quente",
    ["especial", "com leite"],
    "Bebida feita com chocolate dissolvido no leite quente e café",
    "7,90"
  ),
  createCoffee(
    "cubano",
    "Cubano",
    ["especial", "alcoólico", "gelado"],
    "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "12,90"
  ),
  createCoffee(
    "havaiano",
    "Havaiano",
    ["especial"],
    "Bebida adocicada preparada com café e leite de coco",
    "11,90"
  ),
  createCoffee(
    "arabe",
    "Árabe",
    ["especial"],
    "Bebida preparada com grãos de café árabe e especiarias",
    "17,90"
  ),
  createCoffee(
    "irlandes",
    "Irlandês",
    ["especial", "alcoólico"],
    "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "19,90"
  ),
];
