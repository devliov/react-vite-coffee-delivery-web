import styled from "styled-components";

export const ListEmpty = styled.div`
  width: 100%;
  text-align:center;
  padding:4rem;

  svg{
     color: ${props=>props.theme.purple};
  }
  h2{
    color:${props=>props.theme["yellow-dark"]};
    margin-bottom:2rem;
  }
  a{
    color: ${props=>props.theme.white};
    text-decoration:none;
    border:1px solid;
    padding: 1rem;

    border-radius:5px 10px;

    background: ${props=>props.theme["purple-dark"]};

     &:hover {
    transition: background 0.2s ease-in;
    background: ${(props) => props.theme.purple};
  }

  }
`;
