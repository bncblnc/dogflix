import React, { useState } from "react";
import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import Select from "../../components/Form/SelectInput";
import ButtonsForm from "../../components/Form/ButtonsForm";

export default function NewVideo({ categoryData, submitFunction }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function clearInputs() {
    setTitle("");
    setLink("");
    setCategory("");
    setDescription("");
  }

  return (
    <main>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(title, link, category, description);
          clearInputs();
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
          label="Link do vídeo"
          type="text"
          value={link}
          setFunction={setLink}
          isLink
        />

        <Select
          name="category"
          label="Categoria"
          value={category}
          options={categoryData.map((data) => data.category)}
          setFunction={setCategory}
        />

        <TextLarge
          label="Descrição do vídeo"
          type="text"
          value={description}
          setFunction={setDescription}
        />

        <ButtonsForm clearFunction={clearInputs} />
      </FormStyled>
    </main>
  );
}
