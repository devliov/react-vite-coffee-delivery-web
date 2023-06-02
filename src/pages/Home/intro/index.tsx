import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeImage from "../../../assets/images/Coffee.svg";
import { BoxImage, BoxItem, CoffeePackage, DeliveryTimer, FreshCoffee, IntroDivContainer, Shopping, TitleSubTitle } from "./styles";

export function IntroContainer() {
  return (
    <IntroDivContainer>
      <div>
        <TitleSubTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o <b>Coffee Delivery</b> você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleSubTitle>
        <BoxItem>
          <div>
            <p>
              <Shopping>
                <ShoppingCart weight="fill" />
              </Shopping>
              Compra simples e segura
            </p>
            <p>
              <DeliveryTimer>
                <Timer weight="fill" />
              </DeliveryTimer>
              Entrega rápida e rastreada
              </p>
          </div>
          <div>
            <p>
              <CoffeePackage>
                <Package weight="fill" />
              </CoffeePackage>
              Embalagem mantém o café intacto
            </p>
            <p>
              <FreshCoffee>
                <Coffee weight="fill" />
              </FreshCoffee>
              O café chega fresquinho até você
            </p>
          </div>
        </BoxItem>
      </div>

      <BoxImage>
        <img
          src={coffeeImage}
          alt="Copo de café branco com logo do Coffe Delivery"
        />
      </BoxImage>
    </IntroDivContainer>
  );
}