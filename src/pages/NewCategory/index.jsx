import React, { useState } from "react";

import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import ColorInput from "../../components/Form/ColorInput";
import ButtonsForm from "../../components/Form/ButtonsForm";

import CategoriesList from "../../components/CategoriesList";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 2rem;
`;

export default function NewCategory({ categoryData, submitFunction }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <main style={{ minHeight: "calc(100vh - 22rem)" }}>
      <FormStyled
        onSubmit={(evento) => {
          evento.preventDefault();
          submitFunction(name, color, description);
        }}
      >
        <TitleForm>Nova Categoria</TitleForm>
        <Container>
          <TextSmall
            label="Nome"
            type="text"
            value={name}
            setFunction={setName}
          />
          <ColorInput value={color} setFunction={setColor} />
        </Container>

        <TextLarge
          label="Descrição"
          type="text"
          value={description}
          setFunction={setDescription}
        />

        <ButtonsForm />
      </FormStyled>

      <CategoriesList item={categoryData} />
    </main>
  );
}
