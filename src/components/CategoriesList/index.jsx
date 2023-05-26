import React, { useState } from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import {
  blackColorLighter,
  grayColorDark,
  grayColorDialog,
  grayColorLight,
  primaryColor,
} from "../UI/variables";
import { Dialog } from "@mui/material";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import { FiAlertTriangle } from "react-icons/fi";
import { FieldContainer, FormStyled, Invalid, TitleForm } from "../Form";
import TextSmall from "../Form/TextSmall";
import ColorInput from "../Form/ColorInput";
import TextLarge from "../Form/TextLarge";

const CategoryCard = styled.div`
  width: 50%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-top: 5px solid;
  border-radius: 0.3rem;

  color: ${grayColorDark};
  font-size: 2rem;
`;

const IconsBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 4rem;

  > :hover {
    color: ${blackColorLighter};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const DialogBox = styled.div`
  background-color: ${grayColorDialog};
  max-width: 45rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const DialogBoxForm = styled.div`
  background-color: ${grayColorDialog};
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;

const AlertIcon = styled(FiAlertTriangle)`
  color: ${primaryColor};
  font-size: 8rem;
`;

const DialogText = styled.p`
  font-size: 2.1rem;
  color: ${grayColorLight};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const TitleEdit = styled(TitleForm)`
  font-size: 3rem;
`;

export default function CategoriesList({
  item,
  deleteFunction,
  getData,
  editCategory,
}) {
  const [categoryClicked, setCategoryClicked] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

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

  function handleOpenAlert(e) {
    setOpenAlert(true);
    setCategoryClicked(e.currentTarget.id);
  }

  function handleOpenEdit(e) {
    setError("");
    setCategoryClicked(e.currentTarget.id);

    const data = getData(e.currentTarget.id);
    setName(data.category);
    setDescription(data.subtitle);
    setColor(data.color);

    setOpenEdit(true);
  }

  return (
    <>
      {item.map((obj, index) => (
        <CategoryCard key={index} style={{ borderColor: obj.color }}>
          {obj.category}
          <IconsBox>
            <IconEdit id={obj.category} onClick={handleOpenEdit} />
            <IconDelete id={obj.category} onClick={handleOpenAlert} />
          </IconsBox>
        </CategoryCard>
      ))}

      <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
        <DialogBox>
          <Container>
            <AlertIcon />
            <DialogText>
              Tem certeza que deseja deletar a categoria {categoryClicked}?
            </DialogText>
          </Container>
          <ButtonContainer>
            <ButtonSecondary onClick={() => setOpenAlert(false)}>
              Não
            </ButtonSecondary>
            <ButtonPrimary
              primary
              onClick={() => {
                deleteFunction(categoryClicked);
                setOpenAlert(false);
              }}
            >
              Sim
            </ButtonPrimary>
          </ButtonContainer>
        </DialogBox>
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogBoxForm>
          <FormStyled
            onSubmit={(e) => {
              e.preventDefault();
              editCategory(categoryClicked, name, color, description);
              setOpenEdit(false);
            }}
          >
            <TitleEdit>Editar Categoria</TitleEdit>
            <Container>
              <ColorInput value={color} setFunction={setColor} />
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

            <ButtonPrimary primary>Salvar</ButtonPrimary>
          </FormStyled>
        </DialogBoxForm>
      </Dialog>
    </>
  );
}
