import styled from "styled-components";
import { grayColorDialog, primaryColor, primaryColorDarker } from "./variables";
import { Link } from "react-router-dom";

export const MarginLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${primaryColor};
`;

export const MarginMedium = styled.div`
  margin-bottom: 3rem;
`;

export const Card = styled.img`
width: 432px;
height: 246px;
border-radius: 0.5rem;
border: 0.4rem solid;
cursor pointer;
object-fit: cover;
`;

export const CardLarge = styled(Card)`
  width: 64.6rem;
  height: 33.35rem;
`;

export const DialogBox = styled.div`
  background-color: ${grayColorDialog};
  max-width: 45rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const DialogBoxForm = styled.div`
  background-color: ${grayColorDialog};
`;

export const Hyperlink = styled(Link)`
  font-size: 2rem;
  letter-spacing: 1px;
  border-bottom: 2px solid;
  display: inline-block;
  padding-bottom: 1px;

  :link,
  :visited {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }

  :hover,
  :active {
    color: ${primaryColorDarker};
    border-color: ${primaryColorDarker};
  }
`;
