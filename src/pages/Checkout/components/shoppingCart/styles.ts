import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  width: 28rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const ShoppingCartArea = styled.main`
  padding: 2.5rem;
`;

export const ShoopingListArea = styled.ul`
  width: 100%;
  max-height: 306px !important;
  overflow: scroll;
  overflow-x: hidden;
`;

export const TotalBox = styled.div`
  margin-top: 48px;
  width: 100%;
  gap: 12px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 20px;
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Roboto", sans-serif;
    }
  }
`;

export const Item = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 368px;
  background: ${(props) => props.theme["base-card"]};
  margin-bottom: 3rem;


  img {
    width: 64px;
    height: 64px;
    
  }
  p {
    width:171px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  strong {
    margin-right:1.5rem;
    color: ${(props) => props.theme["base-text"]};
  }

  section {
    margin-top:0.875rem;
    margin-left:10px;
    display: inline-flex;
    align-items: center;

    img {
      margin-right: 2rem;
      height:13px;
      width: 13px;
      border: none;
      color: ${(props) => props.theme.purple};
    }
    input {
      margin-left: -27px;
      margin-right:5px;
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
    img:hover {
      color: ${(props) => props.theme["purple-dark"]};
      cursor: pointer;
    }

    button{
      background:transparent;
      margin-left:-0.95rem;
      border:none;
      display:flex;
      gap:6px;
      
      width:80px;
      color:${(props) => props.theme.purple};
      &:hover{
        background:${(props) => props.theme["base-button"]};
        cursor:pointer;
        color:${(props) => props.theme["purple-dark"]};
      }

      span{
        color:${(props) => props.theme["base-text"]};
        font-size: 12px;
        padding-top:5px;
      }
    }
  }
`;
