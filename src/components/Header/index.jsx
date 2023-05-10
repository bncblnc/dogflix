import React from "react";
import styled from "styled-components";
import { blackColorDark } from "../UI/variables";
import { ReactComponent as AluraLogo } from "../../assets/images/logo.svg";
import { Button } from "../Button";

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
  flex: 0 0 min-content;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button>Novo vídeo</Button>
    </StyledHeader>
  );
};

export default Header;
