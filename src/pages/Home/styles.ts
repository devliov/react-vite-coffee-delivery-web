// import { StartCountdownButton } from './styles';
import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  h2 {
    font-size:32px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  gap: 54px;
  width: 100%;

  margin-bottom:5rem;
  
`;

export const HomeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  gap: 1.95rem;
`;

export const CardCoffee = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
`;

export const PriceDiv = styled.div`
  display: flex;
  font-family: "Roboto";
  align-items: center;
  font-style: normal;
  font-weight: 400;
  gap: 5px;

  span {
    display: flex;
    &:nth-child(1) {
      padding-top: 5px;
      line-height: 18px;
      font-size: 13px;
    }

    &:nth-child(2) {
      font-family: "Baloo 2", cursive;
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
    }
  }
`;

export const ShopDiv = styled.div`
  display: flex;
  font-family: "Roboto";
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  gap: 8px;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  input {
    height: 21px;
    width: 20px;
    border: none;
    text-align: center;
    background-color: transparent;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  img{
    width:13px;
    height:13px;
  }
  
  img:hover {
    cursor:pointer;
  }
`;

export const ButtonAddCart = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  color: #fff;
  text-align: center;
  border: none;
  cursor: pointer;
  
   &:hover {
    transition: background 0.2s ease-in;
    background: ${(props) => props.theme.purple};
  }
`;

export const ImageAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  div.labels {
    display: flex;
    gap: 4px;
  }
`;
export const Label = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  margin-top: 12px;
  background-color: ${(props) => props.theme["yellow-light"]};
  width: 5.0625rem;
  height: 1.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const FooterCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 23px;
`;

export const NameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span{
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
  p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;
