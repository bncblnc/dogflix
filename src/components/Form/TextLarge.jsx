import React from "react";
import styled from "styled-components";

import {
  Bar,
  FieldContainer,
  StyledLabel,
  fieldStyled,
  textFieldAnimation,
} from ".";

const StyledTextarea = styled.textarea`
  ${fieldStyled};
  ${textFieldAnimation};
  resize: none;
`;

export default function TextLarge({ label, type, value, setFunction }) {
  return (
    <FieldContainer>
      <StyledTextarea
        rows="4"
        type={type}
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        required
      />
      <Bar />
      <StyledLabel>{label}</StyledLabel>
    </FieldContainer>
  );
}
