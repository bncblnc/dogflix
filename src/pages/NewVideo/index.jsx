import React, { useState } from "react";
import {
  FieldContainer,
  FormStyled,
  Invalid,
  TitleForm,
} from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import Select from "../../components/Form/SelectInput";
import ButtonsForm from "../../components/Form/ButtonsForm";

export default function NewVideo({ categoryData, submitFunction }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});

  function renderError(value) {
    if (value) return <Invalid>{value}</Invalid>;
  }

  return (
    <main>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(title, link, category, description);
        }}
      >
        <TitleForm>Novo Vídeo</TitleForm>

        <FieldContainer>
          <TextSmall
            label="Título"
            type="text"
            value={title}
            setFunction={setTitle}
          />

          {renderError(formErrors.title)}
        </FieldContainer>

        <FieldContainer>
          <TextSmall
            label="Link do vídeo"
            type="text"
            value={link}
            setFunction={setLink}
          />
          {renderError(formErrors.link)}
        </FieldContainer>

        <FieldContainer>
          <Select
            name="category"
            label="Categoria"
            value={category}
            options={categoryData.map((data) => data.category)}
            setFunction={setCategory}
          />
          {renderError(formErrors.category)}
        </FieldContainer>

        <FieldContainer>
          <TextLarge
            label="Descrição do vídeo"
            type="text"
            value={description}
            setFunction={setDescription}
          />
          {renderError(formErrors.description)}
        </FieldContainer>

        <ButtonsForm />
      </FormStyled>
    </main>
  );
}
