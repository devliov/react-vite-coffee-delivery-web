import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items:center;
  flex-wrap: wrap;
  height: 104px;
  width:100%;
  margin:auto;
  
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonLocation = styled.div`
  height: 2.375rem;
  width: 12rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  p {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 14px;
  }
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const Cart = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["yellow-dark"]};
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.yellow};
  }
`;

export const TotalCountItems = styled.div`
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 99px;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  margin-top: -2rem;
  margin-left: -1.7rem;
  font-size: 12px;
  font-weight: 700;
`;

