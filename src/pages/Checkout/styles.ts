import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  gap: 2rem;
  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 800;
  }
`;

export const FirstContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const SecondContainer = styled(FirstContainer)`
  width: 28rem;
  height: 33.5rem;

  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    width: 10rem;
    justify-content: center;
    padding: 10px;
    text-decoration: none;
    margin-top: 1rem;
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};
    margin-left: 9.3rem;
    font-size: 12px;
    font-weight:bold; 
    border-radius:6px;
    cursor: pointer;

     &:hover {
    transition: background 0.2s ease-in;
    background: ${(props) => props.theme.purple};
  }
  }
`;

export const Card = styled.div`
  padding: 3rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const CardTwo = styled(Card)`
  padding: 1rem;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  flex-wrap: wrap;

  div {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.8rem;
  }
`;
export const Input = styled.input`
  height: 2.625rem;
  background: ${(props) => props.theme["base-input"]};
  padding: 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  border-radius: 4px;
  border: none;
  width: ${(props) => (props.width ? props.width : "auto")};

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const OptionsPayment = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.75rem;
`;

export const PaymentButton = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  width: 11.166875rem;
  height: 3.1875rem;
  border: none;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.purple};

  &:focus {
    border: 1px solid ${(props) => props.theme.purple};
  }

  span {
    padding-left: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }
  img {
    color: red;
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const OrganizerDiv = styled.div`
  display: flex;
  gap: 12px;
`;

export const HeadTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 2rem;
  span {
    font-size: 14px;
  }
  .subtitle {
    color: ${(props) => props.theme["base-subtitle"]};
  }
  .yellow {
    color: ${(props) => props.theme.yellow};
  }
  .purple {
    color: ${(props) => props.theme.purple};
  }
`;

export const SubmitButton = styled.button`
  text-transform: uppercase;
  width: 5.6875rem;
  height: 2rem;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
    background: ${(props) => props.theme["base-hover"]};
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.purple};
  }
`;

export const ButtonConfirm = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 800;
  margin-top: -1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.7rem;
  border: none;
  border-radius: 6px;
  width: 23rem;
  padding: 1rem;

  &:hover {
    transition: background 0.2s ease-in;
   
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
