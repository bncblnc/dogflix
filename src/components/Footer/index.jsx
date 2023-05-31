import React from "react";
import styled from "styled-components";

import { TbBrandGithub as IconGithub } from "react-icons/tb";
import { FiLinkedin as IconLinkedin } from "react-icons/fi";

import { MarginLine } from "../UI";
import { grayColorDark, primaryColor } from "../UI/variables";
import LogoLink from "../LogoLink";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const TextFooter = styled.p`
  text-align: center;
  color: ${grayColorDark};
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.2;
  border-right: 2px solid ${grayColorDark};
  padding-right: 3rem;
`;

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: ${grayColorDark};
  font-size: 5rem;

  transition: all 0.2s;

  :hover {
    color: ${primaryColor};
    transform: scale(1.4);
  }
`;

const Footer = () => {
  return (
    <>
      <MarginLine />
      <StyledFooter>
        <LogoLink />
        <Container>
          <TextFooter>
            Desenvolvido por Bianca Blanco durante o <br />
            programa "ONE - Oracle Next Education".{" "}
          </TextFooter>

          <NavStyled>
            <NavItem to="https://www.linkedin.com/in/bncblnc/" target="_blank">
              <IconLinkedin />
            </NavItem>
            <NavItem to="https://github.com/bncblnc" target="_blank">
              <IconGithub />
            </NavItem>
          </NavStyled>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
