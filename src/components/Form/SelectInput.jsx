import React from "react";
import styled from "styled-components";

import { FaChevronDown as Icon } from "react-icons/fa";
import { StyledLabel, fieldStyled, selectFieldAnimation } from ".";
import { grayColorLight } from "../UI/variables";

const StyledSelect = styled.select`
  ${fieldStyled};
  ${selectFieldAnimation};
  appearance: none;

  option {
    font-size: 1.8rem;
  }
`;

const ArrowIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: ${grayColorLight};
  transition: all 0.5s;
`;

export default function Select({ name, label, options, setFunction }) {
  return (
    <>
      <StyledSelect
        name={name}
        onChange={(event) => setFunction(event.target.value)}
        required
      >
        <option value="" hidden></option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>

      <ArrowIcon />

      <StyledLabel>{label}</StyledLabel>
    </>
  );
}
