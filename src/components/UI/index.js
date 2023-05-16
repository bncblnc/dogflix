import styled from "styled-components";
import { primaryColor } from "./variables";

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
