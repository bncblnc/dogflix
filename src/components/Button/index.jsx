import styled from "styled-components";
import { grayColorLight, primaryColor } from "../UI/variables";

export const Button = styled.button`
  font-weight: 600;
  font-size: 2.1rem;
  color: #fff;
  padding: 1.5rem 3rem;
  border: 1px solid ${grayColorLight};
  border-radius: 0.4rem;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
`;
