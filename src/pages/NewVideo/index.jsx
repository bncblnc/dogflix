import React, { useState } from "react";
import { FormStyled, TitleForm } from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";

export default function NewVideo() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <FormStyled>
        <TitleForm>Novo Vídeo</TitleForm>
        <TextSmall label="Título" />
        <TextSmall label="Link do vídeo no YouTube" />
      </FormStyled>
    </main>
  );
}
