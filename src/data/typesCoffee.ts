import Expresso from "../assets/imagesTypesCoffee/TypeCoffeEspresso.svg";
import Americano from "../assets/imagesTypesCoffee/TypeCoffeAmerican.svg";
import ExpressoCremoso from "../assets/imagesTypesCoffee/TypeCoffeCreamyEspresso.svg";
import CafeGelado from "../assets/imagesTypesCoffee/TypeCoffeIcedCoffee.svg";
import CafeComLeite from "../assets/imagesTypesCoffee/TypeCoffeeMilkWhitCoffee.svg";
import Latte from "../assets/imagesTypesCoffee/TypeCoffeLatte.svg";
import Capuccino from "../assets/imagesTypesCoffee/TypeCoffeCapuccino.svg";
import Macchiato from "../assets/imagesTypesCoffee/TypeCoffeMacchiato.svg";
import Mochaccino from "../assets/imagesTypesCoffee/TypeCoffeMochaccino.svg";
import Irlandes from "../assets/imagesTypesCoffee/TypeCoffeIrish.svg";
import Havaiano from "../assets/imagesTypesCoffee/TypeCoffeHawaiian.svg";
import Cubano from "../assets/imagesTypesCoffee/TypeCoffeCuban.svg";
import Arabe from "../assets/imagesTypesCoffee/TypeCoffeArabic.svg";
import ChocolateQuente from "../assets/imagesTypesCoffee/TypeCoffeHotChocolate.svg";

export const listProducts = [
  {
    id: "01",
    srcImage: Expresso,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: ["Tradicional"],
    price: 9.5,
    quantity: 0,
  },
  {
    id: "02",
    srcImage: Americano,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: ["Tradicional"],
    price: 9.0,
    quantity: 0,
  },
  {
    id: "03",
    srcImage: ExpressoCremoso,
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 10.5,
    quantity: 0,
  },
  {
    id: "04",
    srcImage: CafeGelado,
    type: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 8.5,
    quantity: 0,
  },
  {
    id: "05",
    srcImage: CafeComLeite,
    type: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    quantity: 0,
  },
  {
    id: "06",
    srcImage: Latte,
    type: ["Tradicional", "Com Leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 7.5,
    quantity: 0,
  },
  {
    id: "07",
    srcImage: Capuccino,
    type: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 13.5,
    quantity: 0,
  },
  {
    id: "08",
    srcImage: Macchiato,
    type: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 11.5,
    quantity: 0,
  },
  {
    id: "09",
    srcImage: Mochaccino,
    type: ["Tradicional", "Com Leite"],
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.5,
    quantity: 0,
  },
  {
    id: "010",
    srcImage: ChocolateQuente,
    type: ["Especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 12.5,
    quantity: 0,
  },
  {
    id: "011",
    srcImage: Cubano,
    type: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 10.5,
    quantity: 0,
  },
  {
    id: "012",
    srcImage: Havaiano,
    type: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.8,
    quantity: 0,
  },
  {
    id: "013",
    srcImage: Arabe,
    type: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 10.4,
    quantity: 0,
  },
  {
    id: "014",
    srcImage: Irlandes,
    type: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 11.0,
    quantity: 0,
  },
];
