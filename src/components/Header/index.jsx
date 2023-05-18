import React from "react";
import styled from "styled-components";

import { ButtonSecondary } from "../Button";
import { MarginLine } from "../UI";
import LogoLink from "../LogoLink";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 4rem;
  height: 9.4rem;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <LogoLink />

        <Nav>
          <NavLink to="novovideo">
            <ButtonSecondary>Novo vídeo</ButtonSecondary>
          </NavLink>
          <NavLink to="novacategoria">
            <ButtonSecondary>Nova categoria</ButtonSecondary>
          </NavLink>
        </Nav>
      </StyledHeader>
      <MarginLine />
    </>
  );
};

export default Header;
