import styled from "styled-components";
import { grayColorLight } from "../UI/variables";

export const TitleCategory = styled.h1`
  color: ${grayColorLight};
  font-weight: 400;
  font-size: 3.5rem;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  margin-bottom: 3rem;
  background-color: ${(props) => props.color};
`;

export const TitleCategoryLarge = styled(TitleCategory)`
  font-size: 6rem;
`;
