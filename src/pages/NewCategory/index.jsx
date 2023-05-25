import React, { useState } from "react";

import { FieldContainer, FormStyled, TitleForm } from "../../components/Form";
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

export default function NewCategory({
  categoryData,
  submitFunction,
  deleteFunction,
  openEdit,
  editCategory,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <main style={{ minHeight: "calc(100vh - 22rem)" }}>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(name, color, description);
        }}
      >
        <TitleForm>Nova Categoria</TitleForm>
        <Container>
          <FieldContainer>
            <TextSmall
              label="Nome"
              type="text"
              value={name}
              setFunction={setName}
            />
          </FieldContainer>

          <ColorInput value={color} setFunction={setColor} />
        </Container>

        <FieldContainer>
          <TextLarge
            label="Descrição"
            type="text"
            value={description}
            setFunction={setDescription}
          />
        </FieldContainer>

        <ButtonsForm />
      </FormStyled>

      <CategoriesList
        item={categoryData}
        deleteFunction={deleteFunction}
        getData={openEdit}
        editCategory={editCategory}
      />
    </main>
  );
}
