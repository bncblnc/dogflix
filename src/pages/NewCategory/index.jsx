import React, { useState } from "react";

import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import ColorInput from "../../components/Form/ColorInput";
import ButtonsForm from "../../components/Form/ButtonsForm";

export default function NewCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <main>
      <FormStyled
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log(name, color, description);
        }}
      >
        <TitleForm>Nova Categoria</TitleForm>
        <ColorInput value={color} setFunction={setColor} />
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

        <ButtonsForm />
      </FormStyled>
    </main>
  );
}
