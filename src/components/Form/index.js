import styled from "styled-components";
import {
  grayColorInput,
  grayColorLight,
  grayColorMedium,
  primaryColor,
} from "../UI/variables";

export const TitleForm = styled.h1`
  color: ${grayColorLight};
  font-weight: 400;
  font-size: 4rem;
`;

export const FormStyled = styled.form`
  max-width: 100rem;
  min-height: calc(100vh - 22rem);
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const fieldStyled = () => `
  color: ${grayColorMedium};
  background-color: ${grayColorInput};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  border-radius:2px;

  :focus {
    outline: none;
  }
`;

export const selectFieldAnimation = () => `
  :valid ~ label{
    top: -2rem;
    font-size: 1.4rem;
    color: ${primaryColor};
  }
`;

export const textFieldAnimation = () => `
  :focus ~ label,
  :valid ~ label {
    top: -2rem;
    font-size: 1.4rem;
    color: ${primaryColor};
  }

  :focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
   width: 100%;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  :before,
  :after {
    content: "";
    height: 0.2rem;
    width: 0;
    bottom: 0.1rem;
    position: absolute;
    background: ${primaryColor};
    transition: 0.5s ease all;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: ${(props) => (props.static ? primaryColor : grayColorLight)};
  font-size: ${(props) => (props.static ? "1.4rem" : "1.8rem")};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: ${(props) => (props.static ? "-2rem" : "1rem")};
  transition: 0.2s ease all;
`;
