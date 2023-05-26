import React, { useState } from "react";

import {
  FieldContainer,
  FormStyled,
  Invalid,
  TitleForm,
} from "../../components/Form";
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
  const [error, setError] = useState("");

  function renderInvalid(name, value, setFunction, label) {
    let newError = {};

    if (value.replace(/\s/g, "") === "") {
      newError[name] = <Invalid>{label} é obrigatório.</Invalid>;
      setFunction("");
    } else newError[name] = "";

    setError({ ...error, ...newError });
  }

  function clearInputs() {
    setName("");
    setDescription("");
    setColor("#000000");
    setError("");
  }

  return (
    <main style={{ minHeight: "calc(100vh - 22rem)" }}>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(name, color, description);
          clearInputs();
        }}
      >
        <TitleForm>Nova Categoria</TitleForm>
        <Container>
          <FieldContainer>
            <TextSmall
              name="name"
              label="Nome"
              type="text"
              value={name}
              setFunction={setName}
              invalidFunction={renderInvalid}
            />
            {error.name}
          </FieldContainer>

          <ColorInput value={color} setFunction={setColor} />
        </Container>

        <FieldContainer>
          <TextLarge
            name="description"
            label="Descrição"
            type="text"
            value={description}
            setFunction={setDescription}
            invalidFunction={renderInvalid}
          />
          {error.description}
        </FieldContainer>

        <ButtonsForm clearFunction={clearInputs} />
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
