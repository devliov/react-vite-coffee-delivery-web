import { ShoppingCart } from "phosphor-react";
import { ListEmpty } from "./styles";
import { NavLink } from "react-router-dom";

export function ShoppingListEmpty() {

    
  return (
    <ListEmpty>
      <ShoppingCart size={50}/>
      <h2>Seu carrinho está vazio escolha algum de nossos deliciosos cafés!</h2>
      <NavLink to="/" >IR ÀS COMPRAS</NavLink>
    </ListEmpty>
  );
}
