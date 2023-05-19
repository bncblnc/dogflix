import React, { useState } from "react";
import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import { ButtonPrimary } from "../../components/Button";
import Select from "../../components/Form/SelectInput";

import initialData from "../../data/initial-data.json";

export default function NewVideo() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function getOptions() {
    const options = initialData.map((data) => ({ [data.url]: data.category }));
    return options;
  }

  return (
    <main>
      <FormStyled
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log(title, link, category, description);
        }}
      >
        <TitleForm>Novo Vídeo</TitleForm>
        <TextSmall
          label="Título"
          type="text"
          value={title}
          setFunction={setTitle}
        />
        <TextSmall
          label="Link do vídeo no YouTube"
          type="text"
          value={link}
          setFunction={setLink}
        />
        <Select
          name="category"
          value={category}
          options={getOptions()}
          setFunction={setCategory}
        />

        <TextLarge
          label="Descrição do vídeo"
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
