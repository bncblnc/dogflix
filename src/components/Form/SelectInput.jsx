import React from "react";
import styled from "styled-components";

import { FieldContainer, StyledLabel, fieldStyled } from ".";

const StyledSelect = styled.select`
  ${fieldStyled};
`;

export default function Select({ name, options, setFunction }) {
  return (
    <FieldContainer>
      <StyledSelect
        name={name}
        onChange={(event) => setFunction(event.target.value)}
        required
      >
        {options.map((obj, i) => (
          <option key={i} value={Object.keys(obj)[0]}>
            {Object.values(obj)[0]}
          </option>
        ))}
      </StyledSelect>
    </FieldContainer>
  );
}
