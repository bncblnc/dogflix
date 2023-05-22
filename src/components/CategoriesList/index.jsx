import React from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import { blackColorLighter, grayColorDark } from "../UI/variables";

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

export default function CategoriesList({ item }) {
  return (
    <>
      {item.map((obj, index) => (
        <CategoryCard key={index} style={{ borderColor: obj.color }}>
          {obj.category}
          <IconsBox>
            <IconEdit />
            <IconDelete />
          </IconsBox>
        </CategoryCard>
      ))}
    </>
  );
}
