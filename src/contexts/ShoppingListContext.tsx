import { ReactNode, createContext, useEffect, useState } from "react";

import { listProducts } from "../data/typesCoffee";
import { toast } from "react-toastify";

interface Product {
  id: string;
  name: string;
  description: string;
  type: string[];
  price: number;
  quantity: number;
  srcImage: string;
}

interface ProductToAddToCart {
  id: string;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface NewAddressFormData {
  number: string;
  postalCode: string;
  street: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement?: string | undefined;
}

interface CartContextType {
  listProducts: Product[];
  productsToAddCart: ProductToAddToCart[];
  getImageOfProductById(id: string): string;
  getNameOfProductById(id: string): string;
  getPriceOfProductById(id: string): number;
  handleAddProductToCart: (id: string) => boolean;
  removeFromCart: (id: string) => void;
  updateCart: (id: string, quantity: number) => void;
  getValueTotal: () => number;
  saveAddress: (data: any) => void;
  address: NewAddressFormData | undefined;
  setAddress:(data:NewAddressFormData | undefined)=>void;
  paymentForm: string;
  setPaymentForm: (data: string) => void;
  setProductsToAddCart: (data: []) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartContextProviderProps) {
  const [productsToAddCart, setProductsToAddCart] = useState<
    ProductToAddToCart[]
  >([]);

  

  const [paymentForm, setPaymentForm] = useState("");

  const [address, setAddress] = useState<NewAddressFormData | undefined>();

  const handleAddProductToCart = (id: string) => {
    const amount = parseFloat(
      (document.getElementById(id ) as HTMLInputElement)!.value
    );

    const productToAdd = {
      id,
      quantity: amount,
    };

    if(amount==0){
      toast.info("No mínimo uma unidade")
      return false
    }
    if (productsToAddCart.find((element) => element.id == id)) {
      toast.info("Produto já está no carrinho");
      return false;
    } else {
      setProductsToAddCart((state) => [...state, productToAdd]);
      toast.success("Produto adicionado");
      return true;
    }
  };

  useEffect(() => {
    const dataInformations = localStorage.getItem("@coffee-delivery-1.0.0");

    if (dataInformations) {
      setProductsToAddCart(JSON.parse(dataInformations));
    }
  }, [setProductsToAddCart]);

  const saveCart = () => {
    const products = JSON.stringify(productsToAddCart);
    localStorage.setItem("@coffee-delivery-1.0.0", products);
  };

  const saveAddress = (data: NewAddressFormData) => {
    setAddress(data);
    const address = JSON.stringify(data);
    localStorage.setItem("@coffeeDelivery-address-1.0.0", address);
  };

  useEffect(() => {
    saveCart();
  }, [productsToAddCart]);

  const removeFromCart = (id: string) => {
    const products = productsToAddCart.filter((product) => product.id !== id);
    setProductsToAddCart(products);
  };

  function getImageOfProductById(id: string) {
    const product = listProducts.find((element) => element.id === id);
    if (product) return product?.srcImage;
    return "";
  }

  function getNameOfProductById(id: string) {
    const product = listProducts.find((element) => element.id === id);
    if (product) return product?.name;
    return "";
  }

  function getPriceOfProductById(id: string) {
    const product = listProducts.find((element) => element.id === id);
    if (product) return product.price;
    return 0;
  }

  const getValueTotal = () => {
    const total = productsToAddCart.reduce((total, element) => {
      return getPriceOfProductById(element.id) * element.quantity + total;
    }, 0);
    return total;
  };

  const updateCart = (id: string, quantity: number, clear = false) => {
    if (clear) {
      setProductsToAddCart([]);
    } else {
      const productsList = [...productsToAddCart];
      const updatedProductsOfList = productsList.map((element) => {
        if (element.id === id) {
          element.quantity = quantity;
        }
        return element;
      });
      setProductsToAddCart(updatedProductsOfList);
    }
  };

  return (
    <CartContext.Provider
      value={{
        setProductsToAddCart,
        listProducts,
        productsToAddCart,
        handleAddProductToCart,
        getNameOfProductById,
        getPriceOfProductById,
        getImageOfProductById,
        removeFromCart,
        getValueTotal,
        saveAddress,
        updateCart,
        address,
        setAddress,
        paymentForm,
        setPaymentForm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
