import React from "react";
import styled from "styled-components";
import { MarginLine } from "../UI";

import { grayColorLight } from "../UI/variables";
import LogoLink from "../LogoLink";

const StyledFooter = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
`;

const TextFooter = styled.div`
  color: ${grayColorLight};
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <>
      <MarginLine />
      <StyledFooter>
        <LogoLink />
        <TextFooter>Desenvolvido por Bianca Blanco </TextFooter>
      </StyledFooter>
    </>
  );
};

export default Footer;
