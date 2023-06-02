import { ShoppingCartSimple } from "phosphor-react";
import {
  ButtonAddCart,
  CardCoffee,
  CoffeeListContainer,
  FooterCardContainer,
  HomeListContainer,
  ImageAndLabelContainer,
  InputDiv,
  Label,
  NameAndDescriptionContainer,
  PriceDiv,
  ShopDiv,
} from "./styles";

import LessIcon from "../../assets/images/less.svg";
import PlusIcon from "../../assets/images/plus.svg";
import { useContext} from "react";
import { CartContext } from "../../contexts/ShoppingListContext";

import "react-toastify/dist/ReactToastify.css";
import { IntroContainer } from "./intro";
import { ToastContainer, toast } from "react-toastify";

export const Home = () => {
  const { listProducts, handleAddProductToCart, } = useContext(CartContext);
  const handleLessAmountCoffee = (id: string) => {
    const AmountCoffee = parseFloat(
      (document.getElementById(id ) as HTMLInputElement).value
    );

    if (AmountCoffee >= 1) {
      (document.getElementById(id) as HTMLInputElement).value =
        String(AmountCoffee - 1);
    }
  };
  
  const handlePlusAmountCoffee = (id: string) => {
    const AmountCoffee = parseFloat(
      (document.getElementById(id ) as HTMLInputElement).value
    );

    if (AmountCoffee < 15) {
      (document.getElementById(id ) as HTMLInputElement).value =
        String(AmountCoffee + 1);
    } else {
      toast.info("No máximo 15 cafés");
    }
  };


  

  return (
    <div>
      <IntroContainer />

      <ToastContainer />
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <HomeListContainer>
          {listProducts.map((product) => {
            return (
              <CardCoffee key={product.id}>
                <ImageAndLabelContainer>
                  <img src={product.srcImage} alt={product.description} />
                  <div className="labels">
                    {product.type.map((element) => {
                      return (
                        <Label key={element}>
                          <span>{element}</span>
                        </Label>
                      );
                    })}
                  </div>
                </ImageAndLabelContainer>
                <NameAndDescriptionContainer>
                  <span>{product.name}</span>
                  <p>{product.description}</p>
                </NameAndDescriptionContainer>
                <FooterCardContainer>
                  <PriceDiv>
                    <span>R&#36;</span>
                    <span>
                      {product.price.toLocaleString("PT", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </PriceDiv>
                  <ShopDiv>
                    <InputDiv>
                      <img
                        src={LessIcon}
                        alt=""
                        onClick={() => handleLessAmountCoffee(product.id)}
                      />
                      <input
                        key={product.id}
                        type="number"
                        value={product.quantity}
                        min={1}
                        id={product.id}
                        readOnly
                      />
                      <img
                        src={PlusIcon}
                        alt=""
                        onClick={() => handlePlusAmountCoffee(product.id)}
                      />
                    </InputDiv>
                    <ButtonAddCart
                    type="button"
                      title={product.name}
                      onClick={() => handleAddProductToCart(product.id)}
                    >
                      <ShoppingCartSimple size={20} weight="fill" />
                    </ButtonAddCart>
                  </ShopDiv>
                </FooterCardContainer>
              </CardCoffee>
            );
          })}
        </HomeListContainer>
      </CoffeeListContainer>
    </div>
  );
};
