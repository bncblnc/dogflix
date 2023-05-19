import React from "react";
import styled from "styled-components";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";

const StyledTable = styled.table`
  background-color: white;

  td {
    font-size: 2rem;
    padding: 1rem;
  }
`;

export default function Table({ item }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Descrição</td>
        </tr>
      </thead>

      <tbody>
        {item.map((obj) => (
          <tr>
            <td>{obj.category}</td>
            <td>{obj.subtitle}</td>
            <td>
              <IconEdit />
            </td>
            <td>
              <IconDelete />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
