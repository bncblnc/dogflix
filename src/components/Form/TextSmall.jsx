import React from "react";
import styled from "styled-components";

import {
  Bar,
  FieldContainer,
  StyledLabel,
  fieldStyled,
  textFieldAnimation,
} from ".";

const StyledInput = styled.input`
  ${fieldStyled};
  ${textFieldAnimation};
`;

export default function TextSmall({ label, type, value, setFunction }) {
  return (
    <FieldContainer>
      <StyledInput
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
