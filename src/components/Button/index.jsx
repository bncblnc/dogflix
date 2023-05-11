import styled from "styled-components";
import {
  blackColorDark,
  blackColorLighter,
  grayColorLight,
  primaryColor,
} from "../UI/variables";

export const Button = styled.button`
  font-weight: 600;
  font-size: 2.1rem;
  padding: 1.5rem 3rem;
  border-radius: 0.4rem;
  background-color: transparent;
  transition: all 0.3s;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  border: none;
  background-color: ${(props) =>
    props.primary ? primaryColor : blackColorLighter};
  color: ${(props) => (props.primary ? "#fff" : blackColorDark)};

  :hover {
    opacity: 0.85;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: #fff;
  border: 1px solid ${grayColorLight};
  background-color: transparent;

  :hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
`;
