import React from "react";
import styled from "styled-components";

import { FieldContainer, StyledLabel } from ".";
import { grayColorInput } from "../UI/variables";

const StyledInput = styled.input`
  background-color: ${grayColorInput};
  padding: 0.3rem;
  width: 7rem;
  height: 5rem;

  border: none;
  border-radius: 2px;
`;

export default function ColorInput({ value, setFunction }) {
  return (
    <FieldContainer>
      <StyledInput
        type="color"
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        required
      />
      <StyledLabel static>Cor</StyledLabel>
    </FieldContainer>
  );
}
