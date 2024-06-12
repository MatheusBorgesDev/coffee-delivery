interface Coffee {
  imgUrl: string;
  title: string;
  tags: string[];
  description: string;
}

const coffeesImgUrl = "../src/assets/coffees/";

function createCoffee(
  imgName: string,
  title: string,
  tags: string[],
  description: string
): Coffee {
  return {
    imgUrl: `${coffeesImgUrl}${imgName}.png`,
    title,
    tags,
    description,
  };
}

export const coffeesData: Coffee[] = [
  createCoffee(
    "expresso-tradicional",
    "Expresso Tradicional",
    ["tradicional"],
    "O tradicional café feito com água quente e grãos moídos"
  ),
  createCoffee(
    "expresso-americano",
    "Expresso Americano",
    ["tradicional"],
    "Expresso diluído, menos intenso que o tradicional"
  ),
  createCoffee(
    "expresso-cremoso",
    "Expresso Cremoso",
    ["tradicional"],
    "Café expresso tradicional com espuma cremosa"
  ),
  createCoffee(
    "expresso-gelado",
    "Expresso Gelado",
    ["tradicional", "gelado"],
    "Bebida preparada com café expresso e cubos de gelo"
  ),
  createCoffee(
    "cafe-com-leite",
    "Café com Leite",
    ["tradicional", "com leite"],
    "Meio a meio de expresso tradicional com leite vaporizado"
  ),
  createCoffee(
    "latte",
    "Latte",
    ["tradicional", "com leite"],
    "Uma dose de café expresso com o dobro de leite e espuma cremosa"
  ),
  createCoffee(
    "capuccino",
    "Capuccino",
    ["tradicional", "com leite"],
    "Bebida com canela feita de doses iguais de café, leite e espuma"
  ),
  createCoffee(
    "macchiato",
    "Macchiato",
    ["tradicional", "com leite"],
    "Café expresso misturado com um pouco de leite quente e espuma"
  ),
  createCoffee(
    "mocaccino",
    "Mocaccino",
    ["tradicional", "com leite"],
    "Café expresso com calda de chocolate, pouco leite e espuma"
  ),
  createCoffee(
    "chocolate-quente",
    "Chocolate Quente",
    ["especial", "com leite"],
    "Bebida feita com chocolate dissolvido no leite quente e café"
  ),
  createCoffee(
    "cubano",
    "Cubano",
    ["especial", "alcoólico", "gelado"],
    "Drink gelado de café expresso com rum, creme de leite e hortelã"
  ),
  createCoffee(
    "havaiano",
    "Havaiano",
    ["especial"],
    "Bebida adocicada preparada com café e leite de coco"
  ),
  createCoffee(
    "arabe",
    "Árabe",
    ["especial"],
    "Bebida preparada com grãos de café árabe e especiarias"
  ),
  createCoffee(
    "irlandes",
    "Irlandês",
    ["especial", "alcoólico"],
    "Bebida a base de café, uísque irlandês, açúcar e chantilly"
  ),
];
