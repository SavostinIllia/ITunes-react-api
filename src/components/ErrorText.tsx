import React from "react";
import styled from "styled-components";

const ErrorTextP = styled.p`
  text-align: center;
  font-size: 40px;
  color: #fff;
`;

const ErrorText: React.FC = () => {
  return (
    <>
      <ErrorTextP>No artist Found!</ErrorTextP>
    </>
  );
};
export default ErrorText;
