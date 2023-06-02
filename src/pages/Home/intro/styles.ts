import styled from "styled-components";

export const IntroDivContainer = styled.div`
  display: flex;
  width: 100%;
  height: 34rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const TitleSubTitle = styled.div`
  width: 36.75rem;
  margin-bottom: 2.7rem;

  h1 {
    font-size: 48px;
    line-height: 55px;
    margin-bottom: 1rem;
    color: ${props=>props.theme["base-title"]};
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BoxItem = styled.div`
  max-width: 35.4375rem;
  height: 5.25rem;
  display: flex;
  gap:40px;
  p {
    display: inline-flex;
    align-items:center;
    gap:0.78rem;
    margin-bottom:1rem;
  }
`;

export const BaseSpan =styled.span`
 display: flex;
 width: 2rem;
 height: 2rem;
 justify-content: center;
 align-items: center;
 color:${props=>props.theme.white};
 border-radius:9999px;
`;

export const Shopping = styled(BaseSpan)`
background: ${props=>props.theme["yellow-dark"]};
`
export const CoffeePackage = styled(BaseSpan)`
background: ${props=>props.theme["base-text"]};
`
export const DeliveryTimer = styled(BaseSpan)`
background: ${props=>props.theme["yellow"]};
`
export const FreshCoffee = styled(BaseSpan)`
background: ${props=>props.theme["purple"]};
`



export const BoxImage = styled.div`
  img {
    min-width: 21.75rem;
    height: 22.5rem;
  }

`;
