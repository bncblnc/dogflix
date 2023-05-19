import React, { useState } from "react";

import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import { ButtonPrimary } from "../../components/Button";

export default function NewCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  return (
    <main>
      <FormStyled
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log(name, description);
        }}
      >
        <TitleForm>Nova Categoria</TitleForm>
        <TextSmall
          label="Nome"
          type="text"
          value={name}
          setFunction={setName}
        />

        <TextLarge
          label="Descrição"
          type="text"
          value={description}
          setFunction={setDescription}
        />

        <ButtonPrimary type="submit" primary>
          Salvar
        </ButtonPrimary>
      </FormStyled>
    </main>
  );
}
