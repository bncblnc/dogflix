import styled from "styled-components";
import { bpLarge, grayColorLight } from "../UI/variables";

export const TitleCategory = styled.h1`
  color: ${grayColorLight};
  font-weight: 400;
  font-size: 3.5rem;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.color};
`;

export const TitleCategoryLarge = styled(TitleCategory)`
  font-size: 6rem;

  @media (max-width: ${bpLarge}) {
    font-size: 5rem;
  }
`;

export const SubtitleCategoryLarge = styled.h2`
  font-size: 4.7rem;
  font-weight: 400;
  color: ${grayColorLight};

  @media (max-width: ${bpLarge}) {
    font-size: 3.7rem;
  }
`;
