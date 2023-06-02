import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";

import {
  BoxIcons,
  DeliveryContainer,
  DeliveryTimer,
  InfromationsBox,
  Localization,
  Payment,
  Warnings,
} from "./styles";
import Motoboy from "../../assets/images/Illustration.svg";
import { CartContext } from "../../contexts/ShoppingListContext";

export function Success() {
  const { address, paymentForm, } = useContext(CartContext);
  console.log(address);
  return (
    
    <DeliveryContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <InfromationsBox>
        <Warnings>
          <div>
            <BoxIcons>
              <Localization>
                <MapPin weight="fill" />
              </Localization>
              <DeliveryTimer>
                <Timer weight="fill" />
              </DeliveryTimer>
              <Payment>
                <CurrencyDollar />
              </Payment>
            </BoxIcons>
            <section>
              <p>
                Entrega em <b>{address?(`${address.street}, ${address.number}`):""} </b>
                <br />
                {address?(`${address.neighborhood} - ${address.city}, ${address.uf}`):""}
              </p>
              <p>
                Previsão de entrega
                <br />
                <b>20 min - 30 min</b>
              </p>
              <p>
                Pagamento na entrega <br />
                <b>{paymentForm}</b>
              </p>
            </section>
          </div>
        </Warnings>
        <div>
          <img src={Motoboy} alt="Desenho de um motoboy fazendo entrega" />
        </div>
      </InfromationsBox>
    </DeliveryContainer>
  );
}
