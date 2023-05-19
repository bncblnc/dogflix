import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Button";

const Container = styled.div`
  display: flex;
  gap: 4rem;
`;

export default function ButtonsForm() {
  return (
    <Container>
      <ButtonPrimary type="submit" primary>
        Salvar
      </ButtonPrimary>
      <ButtonPrimary>Limpar</ButtonPrimary>
    </Container>
  );
}
