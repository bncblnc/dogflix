import React, { useState } from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import {
  blackColorLighter,
  grayColorDark,
  grayColorInput,
  grayColorLight,
  primaryColor,
} from "../UI/variables";
import { Dialog } from "@mui/material";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import { FiAlertTriangle } from "react-icons/fi";

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
  background-color: ${grayColorInput};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  font-size: 2.5rem;
  color: ${grayColorLight};
  text-align: center;
`;

const AlertIcon = styled(FiAlertTriangle)`
  color: ${primaryColor};
  font-size: 8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export default function CategoriesList({ item, deleteFunction }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [categoryClicked, setCategoryClicked] = useState("");

  function handleOpenAlert(e) {
    setOpenAlert(true);
    setCategoryClicked(e.currentTarget.id);
  }

  return (
    <>
      {item.map((obj, index) => (
        <CategoryCard key={index} style={{ borderColor: obj.color }}>
          {obj.category}
          <IconsBox>
            <IconEdit id={obj.category} />
            <IconDelete id={obj.category} onClick={handleOpenAlert} />
          </IconsBox>
        </CategoryCard>
      ))}
      <Dialog
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogBox>
          <AlertIcon />
          Tem certeza que deseja deletar a categoria {categoryClicked}?
          <ButtonContainer>
            <ButtonSecondary>Não</ButtonSecondary>
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
    </>
  );
}
