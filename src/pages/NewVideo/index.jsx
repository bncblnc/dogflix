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
  const [error, setError] = useState("");

  function renderInvalid(name, value, setFunction, label, isLink) {
    let newError = {};

    if (value.replace(/\s/g, "") === "") {
      newError[name] = <Invalid>{label} é obrigatório.</Invalid>;
      setFunction("");
    } else if (isLink && !value.includes("youtu")) {
      newError[name] = <Invalid>O vídeo precisa ser do YouTube.</Invalid>;
      setFunction("");
    } else newError[name] = "";

    setError({ ...error, ...newError });
  }

  function clearInputs() {
    setTitle("");
    setLink("");
    setCategory("");
    setDescription("");
    setError("");
  }

  return (
    <main>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(title, link, category, description);
          console.log(title, link, category, description);
          clearInputs();
        }}
      >
        <TitleForm>Novo Vídeo</TitleForm>

        <FieldContainer>
          <TextSmall
            name="title"
            label="Título"
            type="text"
            value={title}
            setFunction={setTitle}
            invalidFunction={renderInvalid}
          />
          {error.title}
        </FieldContainer>

        <FieldContainer>
          <TextSmall
            name="linkVideo"
            label="Link do vídeo"
            type="text"
            value={link}
            setFunction={setLink}
            invalidFunction={renderInvalid}
            isLink
          />
          {error.linkVideo}
        </FieldContainer>

        <Select
          name="category"
          label="Categoria"
          value={category}
          options={categoryData.map((data) => data.category)}
          setFunction={setCategory}
        />

        <FieldContainer>
          <TextLarge
            name="description"
            label="Descrição do vídeo"
            type="text"
            value={description}
            setFunction={setDescription}
            invalidFunction={renderInvalid}
          />
          {error.description}
        </FieldContainer>

        <ButtonsForm clearFunction={clearInputs} />
      </FormStyled>
    </main>
  );
}
