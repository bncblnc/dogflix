import React, { useState } from "react";
import { TitleCategory } from "../../components/TitleCategory";

export default function NewCategory() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [color, setColor] = useState("");

  return (
    <main>
      <TitleCategory color="red">Nova Categoria</TitleCategory>
    </main>
  );
}
