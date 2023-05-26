import React from "react";
import styled from "styled-components";

import { FaChevronDown as Icon } from "react-icons/fa";
import {
  FieldContainer,
  StyledLabel,
  fieldStyled,
  selectFieldAnimation,
} from ".";
import {
  grayColorInput,
  grayColorLight,
  grayColorMedium,
  primaryColor,
} from "../UI/variables";

const StyledSelect = styled.select`
  ${fieldStyled};
  ${selectFieldAnimation};
  appearance: none;
  pointer-events: none;
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

const OptionsBox = styled.div`
  position: absolute;
  width: inherit;
  height: 0px;
  max-height: 20rem;
  overflow-y: auto;
  z-index: 10;

  background-color: ${grayColorInput};

  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;

  transition: all 0.5s;
`;

const OptionDiv = styled.div`
  color: ${grayColorMedium};
  font-size: 1.8rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #656565;
  cursor: pointer;

  :hover {
    background-color: ${primaryColor};
  }
`;

export default function Select({ name, label, options, setFunction }) {
  function toggleOptionBox() {
    const optionsBox = document.querySelector(".options-box");

    if (optionsBox.style.height === "") optionsBox.style.height = "auto";
    else optionsBox.style.height = "";
  }

  function selectOption(event) {
    const optionsBox = document.querySelector(".options-box");
    const select = document.querySelector(".select");

    optionsBox.style.height = "";
    select.value = `${event.currentTarget.id}`;
    setFunction(event.currentTarget.id);
  }

  return (
    <FieldContainer>
      <FieldContainer onClick={toggleOptionBox}>
        <StyledSelect name={name} className="select" required>
          <option key="" hidden></option>
          {options.map((option) => (
            <option key={option} hidden>
              {option}
            </option>
          ))}
        </StyledSelect>
        <ArrowIcon />

        <StyledLabel>{label}</StyledLabel>
      </FieldContainer>

      <OptionsBox className="options-box">
        {options.map((option) => (
          <OptionDiv key={option} id={option} onClick={selectOption}>
            {option}
          </OptionDiv>
        ))}
      </OptionsBox>
    </FieldContainer>
  );
}
