import React from "react";
import styled from "styled-components";
import { ReactComponent as AluraLogo } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Logo = styled(AluraLogo)`
  height: 100%;
  flex: 0 0 min-content;
`;

const Link = styled(NavLink)`
  height: 100%;
  width: 0;
  display: flex;
`;

const LogoLink = () => {
  return (
    <Link to="/">
      <Logo alt="Logo AluraFlix" />
    </Link>
  );
};

export default LogoLink;
