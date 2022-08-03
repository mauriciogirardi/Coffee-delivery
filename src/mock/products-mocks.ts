import expressoTradicialSvg from "./coffee-svgs/expresso-tradicional.svg";
import expressoAmericanoSvg from "./coffee-svgs/expresso-americano.svg";
import expressoCremosoSvg from "./coffee-svgs/expresso-cremoso.svg";
import expressoGeladoSvg from "./coffee-svgs/expresso-gelado.svg";
import cafeComLeiteSvg from "./coffee-svgs/cafe-com-leite.svg";
import latteSvg from "./coffee-svgs/latte.svg";
import capuccinoSvg from "./coffee-svgs/capuccino.svg";
import macchiatoSvg from "./coffee-svgs/macchiato.svg";
import macchianoSvg from "./coffee-svgs/mocaccino.svg";
import chocolateQuenteSvg from "./coffee-svgs/chocolate-quente.svg";
import cubanoSvg from "./coffee-svgs/havaiano.svg";
import havaianoSvg from "./coffee-svgs/havaiano.svg";
import arabeSvg from "./coffee-svgs/arabe.svg";
import irlandesSvg from "./coffee-svgs/irlandes.svg";

export const dataProducts = [
  {
    id: 0,
    image: expressoTradicialSvg,
    type: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    qtd: 50,
  },
  {
    id: 1,
    image: expressoAmericanoSvg,
    type: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 8.5,
    qtd: 50,
  },
  {
    id: 3,
    image: expressoCremosoSvg,
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 10.5,
    qtd: 50,
  },
  {
    id: 4,
    image: expressoGeladoSvg,
    type: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 6.0,
    qtd: 50,
  },
  {
    id: 5,
    image: cafeComLeiteSvg,
    type: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 5.0,
    qtd: 50,
  },
  {
    id: 6,
    image: latteSvg,
    type: ["Tradicional", "Com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 8.0,
    qtd: 50,
  },
  {
    id: 7,
    image: capuccinoSvg,
    type: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 8.0,
    qtd: 50,
  },
  {
    id: 8,
    image: macchiatoSvg,
    type: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 8.0,
    qtd: 50,
  },
  {
    id: 9,
    image: macchianoSvg,
    type: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.0,
    qtd: 50,
  },
  {
    id: 10,
    image: chocolateQuenteSvg,
    type: ["especial", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.0,
    qtd: 50,
  },
  {
    id: 11,
    image: cubanoSvg,
    type: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 12.0,
    qtd: 30,
  },
  {
    id: 12,
    image: havaianoSvg,
    type: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 12.5,
    qtd: 30,
  },
  {
    id: 13,
    image: arabeSvg,
    type: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 15.5,
    qtd: 30,
  },
  {
    id: 14,
    image: irlandesSvg,
    type: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 15.5,
    qtd: 30,
  },
];
