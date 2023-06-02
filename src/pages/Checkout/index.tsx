import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import {
  FirstContainer,
  SecondContainer,
  MainContainer,
  Form,
  HeadTitle,
  Card,
  Input,
  OrganizerDiv,
  PaymentButton,
  OptionsPayment,
  ButtonConfirm,
  SubmitButton,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingListContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ToastContainer, toast } from "react-toastify";
import { ShoppingListEmpty } from "./shoppingListEmpty";
import { ShoppingCart } from "./components/shoppingCart";
import { NavLink } from "react-router-dom";

const newAddressFormValidationSchema = zod.object({
  postalCode: zod.string().min(8, "Informe o CEP corretamente"),
  street: zod.string().min(3, "Informe a Rua"),
  neighborhood: zod.string().min(3, "Informe o Bairro"),
  city: zod.string().min(3, "Informe a Rua"),
  uf: zod.string().min(2, "Informe a UF"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string().optional(),
});

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export const Checkout = () => {
  enum PaymentFormTypes {
    CREDIT_CARD = "Cartão de Crédito",
    DEBIT_CARD = "Cartão de Débito",
    MONEY = "Dinheiro",
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      postalCode: "",
      street: "",
      neighborhood: "",
      city: "",
      uf: "",
      number: "",
    },
  });

  const {
    productsToAddCart,
    setAddress,
    setPaymentForm,
    paymentForm,
    address,
    setProductsToAddCart,
  } = useContext(CartContext);

  function handleCreateAddress(data: NewAddressFormData) {
    setAddress(data);
    toast.success("Endereço confirmado!");
  }

  const handleConfirmOrder = () => {
    if (!address || Object.keys(errors).length != 0) {
      toast.info("Preencha o endereço corretamente");
      return;
    }
    if (paymentForm == "") {
      toast.info("Necessário selecionar a forma de pagamento");
      return;
    }
    navigate("/success");
    setProductsToAddCart([]);
  };

  const handleFormPayment = (paymentForm: string) => {
    if (paymentForm == "") return;
    setPaymentForm(paymentForm);
    toast.success(`Forma de Pagamento Escolhida - ${paymentForm}`);
  };

  const shoppingListEmpty = productsToAddCart.length === 0;

  return (
    <MainContainer>
      {shoppingListEmpty ? (
        <ShoppingListEmpty />
      ) : (
        <>
          <ToastContainer />
          <FirstContainer>
            <h4>Complete seu pedido</h4>
            <Card>
              <HeadTitle>
                <MapPinLine className="yellow" size={22} />
                <div>
                  <p className="subtitle">Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </HeadTitle>
              <Form onSubmit={handleSubmit(handleCreateAddress)}>
                <Input
                  placeholder="CEP"
                  width="200px"
                  max={9}
                  {...register("postalCode")}
                />

                <Input
                  placeholder="Rua"
                  width="560px"
                  {...register("street")}
                />

                <OrganizerDiv>
                  <Input
                    placeholder="Número"
                    width="200px"
                    {...register("number")}
                  />

                  <Input
                    placeholder="Complemento (opcional)"
                    width="348px"
                    {...register("complement")}
                  />
                </OrganizerDiv>
                <OrganizerDiv>
                  <Input
                    placeholder="Bairro"
                    width="200px"
                    {...register("neighborhood")}
                  />
                  <Input
                    placeholder="Cidade"
                    width="276px"
                    {...register("city")}
                  />
                  <Input placeholder="UF" width="60px" {...register("uf")} />
                </OrganizerDiv>

                <div>
                  {errors.postalCode && (
                    <div role="alert">O campo "CEP" é obrigatório</div>
                  )}
                  {errors.street && (
                    <div role="alert">O campo "Rua" é obrigatório</div>
                  )}
                  {errors.number && (
                    <div role="alert">O campo "Número" é obrigatório</div>
                  )}
                  {errors.neighborhood && (
                    <div role="alert">O campo "Bairro" é obrigatório</div>
                  )}
                  {errors.city && (
                    <div role="alert">O campo "Cidade" é obrigatório</div>
                  )}
                  {errors.uf && (
                    <div role="alert">O campo "UF" é obrigatório</div>
                  )}
                </div>

                <OrganizerDiv>
                  <SubmitButton type="submit">Confirmar</SubmitButton>
                </OrganizerDiv>
              </Form>
            </Card>

            <Card>
              <HeadTitle>
                <CurrencyDollar className="purple" size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </HeadTitle>
              <OptionsPayment>
                <PaymentButton
                  id="CC"
                  onClick={() =>
                    handleFormPayment(PaymentFormTypes.CREDIT_CARD)
                  }
                >
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </PaymentButton>
                <PaymentButton
                  id="CD"
                  onClick={() => handleFormPayment(PaymentFormTypes.DEBIT_CARD)}
                >
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </PaymentButton>
                <PaymentButton
                  id="D"
                  onClick={() => handleFormPayment(PaymentFormTypes.MONEY)}
                >
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </PaymentButton>
              </OptionsPayment>
            </Card>
          </FirstContainer>

          <SecondContainer>
            <h4>Cafés selecionados</h4>
            <ShoppingCart />
            <ButtonConfirm onClick={handleConfirmOrder}>
              Confirmar Pedido
            </ButtonConfirm>

            <NavLink to="/" >
              Voltar às compras
            </NavLink>
          </SecondContainer>
        </>
      )}
    </MainContainer>
  );
};
