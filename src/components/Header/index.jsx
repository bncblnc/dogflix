import React from "react";
import styled from "styled-components";
import { blackColorDark } from "../UI/variables";
import { ReactComponent as AluraLogo } from "../../assets/images/logo.svg";

const StyledHeader = styled.header`
  background-color: ${blackColorDark};
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 4rem;
  height: 9.4rem;
  align-items: center;
`;

const Logo = styled(AluraLogo)`
  height: 100%;
  flex-basis: min-content;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div>Botao</div>
    </StyledHeader>
  );
};

export default Header;
