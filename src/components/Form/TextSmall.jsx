import React from "react";
import styled, { keyframes } from "styled-components";
import { grayColorInput, grayColorLight, primaryColor } from "../UI/variables";

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 0.2rem;
    width: 0;
    bottom: 0.1rem;
    position: absolute;
    background: ${primaryColor};
    transition: 0.5s ease all;
  }
`;

const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: ${grayColorInput};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -2rem;
    font-size: 1.4rem;
    color: ${primaryColor};
  }

  &:focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  color: ${grayColorLight};
  font-size: 1.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 0.2s ease all;
`;

export default function TextSmall({ label }) {
  return (
    <FieldContainer>
      <StyledInput type="text" required />
      <Bar />
      <StyledLabel>{label}</StyledLabel>
    </FieldContainer>
  );
}
