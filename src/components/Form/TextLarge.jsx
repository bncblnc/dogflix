import React, { useState } from "react";
import styled from "styled-components";

import {
  Bar,
  FieldContainer,
  Invalid,
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
  const [error, setError] = useState("");

  function renderInvalid(value) {
    if (value.replace(/\s/g, "") === "") {
      setError(<Invalid>{label} é obrigatório.</Invalid>);
      setFunction("");
    } else setError("");
  }

  return (
    <FieldContainer>
      <StyledTextarea
        rows="4"
        type={type}
        value={value}
        onChange={(event) => setFunction(event.target.value)}
        onBlur={() => renderInvalid(value)}
        required
      />
      {error}
      <Bar />
      <StyledLabel>{label}</StyledLabel>
    </FieldContainer>
  );
}
