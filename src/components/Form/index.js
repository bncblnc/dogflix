import styled from "styled-components";
import { grayColorLight } from "../UI/variables";

export const TitleForm = styled.h1`
  color: ${grayColorLight};
  font-weight: 400;
  font-size: 4rem;
`;

export const FormStyled = styled.form`
  width: 80%;
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;
