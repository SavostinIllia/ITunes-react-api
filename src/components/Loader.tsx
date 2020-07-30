import React from "react";
import logo from "../img/ITunes-logo.png";
import styled, { keyframes } from "styled-components";
interface LoaderProps {}

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: stretch;
  perspective: 1000px;
  margin-top: 100px;
`;

const logoSpin = keyframes`
    0%{
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(180deg);
    }
    100%{
        transform: rotateY(360deg);
    }
`;

const LoaderImg = styled.img`
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  animation: ${logoSpin} 1s infinite;
`;

const Loader: React.FC<LoaderProps> = () => {
  return (
    <LoaderDiv>
      <LoaderImg src={logo} />
    </LoaderDiv>
  );
};
export default Loader;
