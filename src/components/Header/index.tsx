import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/Logo.svg";

import {
  ButtonLocation,
  Cart,
  CartContainer,
  HeaderContainer,
  TotalCountItems,
} from "./styles";

import { CartContext } from "../../contexts/ShoppingListContext";

export function Header() {
  const { productsToAddCart, } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <CartContainer>
        <ButtonLocation>
          <MapPin size={22} weight="fill" />
          <p>São Caetano do Sul, Sp</p>
        </ButtonLocation>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
        {productsToAddCart.length > 0 ? (
          <TotalCountItems>{productsToAddCart.length}</TotalCountItems>
        ) : (
          ""
        )}
      </CartContainer>
    </HeaderContainer>
  );
}
