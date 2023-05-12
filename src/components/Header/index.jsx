import React from "react";
import styled from "styled-components";
import { ReactComponent as AluraLogo } from "../../assets/images/logo.svg";
import { ButtonSecondary } from "../Button";
import { MarginLine } from "../UI";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 4rem;
  height: 9.4rem;
  align-items: center;
`;

const Logo = styled(AluraLogo)`
  height: 100%;
  flex: 0 0 min-content;
`;

const LogoLink = styled(NavLink)`
  height: 100%;
  width: 0;
  display: flex;
  background-color: red;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <LogoLink to="/">
          <Logo alt="Logo AluraFlix" />
        </LogoLink>

        <Nav>
          <ButtonSecondary to="newvideo">Novo vídeo</ButtonSecondary>
          <ButtonSecondary to="newcategory">Nova categoria</ButtonSecondary>
        </Nav>
      </StyledHeader>
      <MarginLine />
    </>
  );
};

export default Header;
