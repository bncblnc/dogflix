import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";
import { MdDelete as IconDelete } from "react-icons/md";
import { TitleForm } from "../Form";
import {
  grayColorDialog,
  grayColorLight,
  primaryColor,
  blackColorLighter,
  grayColorDark,
} from "../UI/variables";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;

export const AlertIcon = styled(FiAlertTriangle)`
  color: ${primaryColor};
  font-size: 8rem;
`;

export const DialogText = styled.p`
  font-size: 2.1rem;
  color: ${grayColorLight};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const CategoryCard = styled.div`
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

export const IconsBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 4rem;

  > :hover {
    color: ${blackColorLighter};
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const TitleDialog = styled(TitleForm)`
  font-size: 3rem;
`;

export const VideoDialogBox = styled.div`
  background-color: ${grayColorDialog};
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const VideoCard = styled.div`
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

export const IconDeleteVideo = styled(IconDelete)`
  font-size: 2.5rem;

  :hover {
    color: ${blackColorLighter};
    cursor: pointer;
    transform: scale(1.2);
  }
`;
