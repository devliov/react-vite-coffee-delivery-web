import { useContext } from "react";
import LessIcon from "../../../../assets/images/less.svg"
import PlusIcon from "../../../../assets/images/plus.svg"
import {
  Item,
  ShoopingListArea,
  ShoppingCartArea,
  ShoppingCartContainer,
  TotalBox,
} from "./styles";
import { CartContext } from "../../../../contexts/ShoppingListContext";
import { toast } from "react-toastify";
import { Trash} from "phosphor-react";

export function ShoppingCart() {
  const { getValueTotal, updateCart, removeFromCart,productsToAddCart,getPriceOfProductById,getImageOfProductById,getNameOfProductById } = useContext(CartContext);

  const formatCoin = (value: number, aditional = 0) => {
    return (value + aditional).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handlePlusAmountCoffee = (id: string) => {
    const inputValue = parseFloat(
      (document.getElementById(id + "Amount") as HTMLInputElement)!.value
    );
    if (inputValue < 15) {
      const quantity = ((
        document.getElementById(id + "Amount") as HTMLInputElement
      )!.value = String(inputValue + 1));
      updateCart(id, Number(quantity));
    } else {
      toast.info("No máximo 15 cafés");
    }
  };

  const handleLessAmountCoffee = (id: string) => {
    const inputValue = parseFloat(
      (document.getElementById(id + "Amount") as HTMLInputElement)!.value
    );
    if (inputValue >= 2) {
      const quantity = ((
        document.getElementById(id + "Amount") as HTMLInputElement
      )!.value = String(inputValue - 1));
      updateCart(id, Number(quantity));
    } else if (inputValue == 1) {
      const quantity = ((
        document.getElementById(id + "Amount") as HTMLInputElement
      )!.value = String(inputValue - 1));
      updateCart(id, Number(quantity));
      removeFromCart(id);
    }
  };

  return (
    <ShoppingCartContainer>
      <ShoppingCartArea>
        <ShoopingListArea>
          {productsToAddCart.map((element)=>(
          <Item key={element.id}>
            <img
              src={getImageOfProductById(element.id)}
              alt="chicara que representa o café escolhido"
              title="Expresso"
            />
            <div>
              <p>{getNameOfProductById(element.id)}</p>
              <section>
                <img
                  src={LessIcon}
                  alt=""
                  onClick={() => handleLessAmountCoffee(element.id)}
                />
                <input
                  type="number"
                  value={element.quantity}
                  min={1}
                  name="quantidade"
                  id={element.id + "Amount"}
                  readOnly
                />
                <img
                  src={PlusIcon}
                  alt=""
                  onClick={() => handlePlusAmountCoffee(element.id)}
                />
            <button><Trash size={22} onClick={()=>removeFromCart(element.id)}/><span>REMOVER</span></button>
              </section>
            </div>
            <strong>{formatCoin(getPriceOfProductById(element.id))}</strong>
          </Item>
          ))}
        </ShoopingListArea>
        <TotalBox>
          <div>
            <p>Total de itens</p>
            <span>{formatCoin(getValueTotal())}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R&#36; 3,50</span>
          </div>
          <div>
            <h2>Total</h2>
            <h2>
              <span>{formatCoin(getValueTotal(), 3.5)}</span>
            </h2>
          </div>
        </TotalBox>
      </ShoppingCartArea>
    </ShoppingCartContainer>
  );
}
