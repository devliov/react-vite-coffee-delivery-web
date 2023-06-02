import styled from "styled-components";


export const DeliveryContainer = styled.main`
  margin-top: 5rem;
  width: 100%;
  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size:32px;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size:20px;
  }

  @media screen and (max-width:1015px){
    text-align:center;
  }

  img {
    width: 492px;
    height: 293px;
  }
`;

export const InfromationsBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width:1015px){
    justify-content:center;
  }
`;

export const Warnings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(110deg, #dbac2c, #8047f2);
  border-radius: 6px 36px;
  width: 526px;
  height: 270px;

  div {
    background: white;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 524px;
    height: 268px;
    padding-left: 1rem;
    border-radius: 6px 36px;

    section {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      width: 450rem;
      p{
        font-size:16px;
      }
    }
  }
`;

export const BoxIcons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  gap: 38px;
`;

export const Icons = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  color: ${(props) => props.theme.background};
`;

export const Localization = styled(Icons)`
  background: ${(props) => props.theme["purple-dark"]};
`;
export const DeliveryTimer = styled(Icons)`
  background: ${(props) => props.theme.yellow};
`;
export const Payment = styled(Icons)`
  background: ${(props) => props.theme["yellow-dark"]};
`;
