import React, { useState } from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import {
  blackColorLighter,
  grayColorDark,
  grayColorDialog,
  grayColorLight,
} from "../UI/variables";
import { Dialog } from "@mui/material";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import { FieldContainer, FormStyled, Invalid, TitleForm } from "../Form";
import TextSmall from "../Form/TextSmall";
import ColorInput from "../Form/ColorInput";
import TextLarge from "../Form/TextLarge";
import { DialogBox, DialogBoxForm, Hyperlink } from "../UI";
import VideosList from "../VideosList";
import { AlertIcon, ButtonContainer, Container, DialogText } from "./elements";

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

const TitleDialog = styled(TitleForm)`
  font-size: 3rem;
`;

const VideoDialogBox = styled.div`
  background-color: ${grayColorDialog};
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const VideoCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;

  color: ${grayColorLight};
  font-size: 1.8rem;
`;

const IconDeleteVideo = styled(IconDelete)`
  font-size: 2.5rem;

  :hover {
    color: ${blackColorLighter};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default function CategoriesList({
  data,
  deleteCategory,
  editCategory,
  deleteVideo,
}) {
  const [categoryClicked, setCategoryClicked] = useState("");
  const [videoClicked, setVideoClicked] = useState("");

  const [openAlert, setOpenAlert] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openVideoList, setOpenVideoList] = useState(false);
  const [openAlertVideo, setOpenAlertVideo] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [videos, setVideos] = useState([]);
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

    const editData = data.filter(
      (item) => item.category === e.currentTarget.id
    )[0];
    setName(editData.category);
    setDescription(editData.description);
    setColor(editData.color);
    setVideos(editData.videos);

    setOpenEdit(true);
  }

  return (
    <>
      {data.map((obj, index) => (
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
                deleteCategory(categoryClicked);
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
            <TitleDialog>Editar Categoria</TitleDialog>
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

            <Hyperlink
              onClick={() => {
                setOpenVideoList(true);
                setOpenEdit(false);
              }}
            >
              Vídeos da categoria →
            </Hyperlink>
            <ButtonPrimary primary>Salvar</ButtonPrimary>
          </FormStyled>
        </DialogBoxForm>
      </Dialog>

      <Dialog
        open={openVideoList}
        onClose={() => setOpenVideoList(false)}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <VideoDialogBox>
          <Hyperlink
            style={{ alignSelf: "flex-start" }}
            onClick={() => {
              setOpenVideoList(false);
              setOpenEdit(true);
            }}
          >
            ← Voltar
          </Hyperlink>
          {videos.map((obj, index) => (
            <VideoCard key={index}>
              {obj.title}

              <IconDeleteVideo
                id={obj.id}
                onClick={(e) => {
                  setVideoClicked(e.currentTarget.id);
                  setOpenAlertVideo(true);
                }}
              />
            </VideoCard>
          ))}

          <Dialog
            open={openAlertVideo}
            onClose={() => setOpenAlertVideo(false)}
          >
            <DialogBox>
              <Container>
                <AlertIcon />
                <DialogText>Tem certeza que deseja deletar o vídeo?</DialogText>
              </Container>
              <ButtonContainer>
                <ButtonSecondary onClick={() => setOpenAlertVideo(false)}>
                  Não
                </ButtonSecondary>
                <ButtonPrimary
                  primary
                  onClick={() => {
                    deleteVideo(categoryClicked, videoClicked);
                    setOpenAlertVideo(false);
                    setOpenVideoList(false);
                  }}
                >
                  Sim
                </ButtonPrimary>
              </ButtonContainer>
            </DialogBox>
          </Dialog>
        </VideoDialogBox>
      </Dialog>
    </>
  );
}
