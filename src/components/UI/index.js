import styled from "styled-components";
import {
  bpLarge,
  bpLargest,
  bpMedium,
  grayColorDialog,
  primaryColor,
  primaryColorDarker,
} from "./variables";
import { Link } from "react-router-dom";

export const MarginLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${primaryColor};
`;

export const MarginMedium = styled.div`
  margin-bottom: 3rem;
`;

export const MarginLarge = styled.div`
  margin-bottom: 5rem;
`;

export const Card = styled.img`
width: 43.2rem;
height: 24.6rem;
border-radius: 0.5rem;
border: 0.4rem solid;
cursor pointer;
object-fit: cover;

@media (max-width: ${bpLargest}) {
  width: 38.88rem;
  height: 22.14rem;
}

@media (max-width: ${bpLarge}) {
  width: 34.56rem;
  height: 19.68rem;
}
`;

export const CardLarge = styled(Card)`
  width: 64.6rem;
  height: 33.35rem;

  @media (max-width: ${bpLargest}) {
    width: 58.14rem;
    height: 30.01rem;
  }

  @media (max-width: ${bpLarge}) {
    width: 51.68rem;
    height: 26.68rem;
  }

  @media (max-width: 1100px) {
    width: 48.45rem;
    height: 25.01rem;
  }

  @media (max-width: ${bpMedium}) {
    width: 58.14rem;
    height: 30.01rem;
  }
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
