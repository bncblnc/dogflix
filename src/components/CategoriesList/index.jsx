import React from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import { grayColorDark } from "../UI/variables";

const StyledTable = styled.table`
  max-width: 80rem;
  border-spacing: 0 2rem;
  color: ${grayColorDark};

  td {
    border-top: 5px solid transparent;
    padding: 1rem 2rem;
  }
`;

const Row = styled.tr`
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 4rem;
`;

const FirstCol = styled.td`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0.5rem;
`;

const LastCol = styled.td`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 0.5rem;
`;

const IconsBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 4rem;
`;

function borderColor(color) {
  return {
    borderColor: `${color}`,
  };
}

export default function CategoriesList({ item }) {
  return (
    <StyledTable>
      <tbody>
        {item.map((obj, index) => (
          <Row key={index}>
            <FirstCol style={borderColor(obj.color)}>{obj.category}</FirstCol>
            <td style={borderColor(obj.color)}>{obj.subtitle}</td>
            <LastCol style={borderColor(obj.color)}>
              <IconsBox>
                <IconEdit />
                <IconDelete />
              </IconsBox>
            </LastCol>
          </Row>
        ))}
      </tbody>
    </StyledTable>
  );
}
