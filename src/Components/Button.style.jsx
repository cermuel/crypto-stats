import styledComponents from "styled-components";
import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.large ? "500px" : "200px")};
  padding: 20px;
  background-color: ${(props) => props.background};
  color: black;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: purple;
    font-family: Brittanic Bold;
    border-radius: 20px;
    border-color: purple;
    color: white;
    letter-spacing: 2px;
    & a {
      color: white;
    }
  }
`;

export const LinkButton = styled.a`
  color: black;
`;
