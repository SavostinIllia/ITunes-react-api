import React from "react";
import styled from "styled-components";
import logo from "../img/ITunes-logo.png";

interface HeaderProps {}

const HeaderSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  /* background: linear-gradient(135deg, #ff6932 20%, #d600fc 50%, #3cf2fc 80%); */
`;

const HeaderLogo = styled.img`
  width: 100px;
`;
const LogoTitle = styled.h1`
  font-size: 35px;
  margin-left: 20px;
  color: #fff;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderSection>
      <a href="/">
        <HeaderLogo src={logo}></HeaderLogo>
      </a>

      <LogoTitle> ITunes Search API</LogoTitle>
    </HeaderSection>
  );
};
export default Header;
