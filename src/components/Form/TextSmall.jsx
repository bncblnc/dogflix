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

const StyledInput = styled.input`
  ${fieldStyled};
  ${textFieldAnimation};
`;

export default function TextSmall({
  label,
  type,
  value,
  setFunction,
  isLink = false,
}) {
  const [error, setError] = useState("");

  function renderInvalid(value) {
    if (value.replace(/\s/g, "") === "") {
      setError(<Invalid>{label} é obrigatório.</Invalid>);
      setFunction("");
    } else if (isLink && !value.includes("youtu")) {
      setError(<Invalid>O vídeo precisa ser do YouTube.</Invalid>);
    } else setError("");
  }

  return (
    <FieldContainer>
      <StyledInput
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
