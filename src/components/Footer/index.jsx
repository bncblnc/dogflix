import React from "react";
import styled from "styled-components";
import { MarginLine } from "../UI";
import { ReactComponent as AluraLogo } from "../../assets/images/logo.svg";
import { grayColorLight } from "../UI/variables";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;
`;

const Logo = styled(AluraLogo)`
  height: 6rem;
  flex: 0 0 min-content;
`;

const TextFooter = styled.div`
  color: ${grayColorLight};
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <>
      <MarginLine />
      <StyledFooter>
        <Logo alt="Logo AluraFlix" />
        <TextFooter>Desenvolvido por Bianca Blanco</TextFooter>
      </StyledFooter>
    </>
  );
};

export default Footer;
