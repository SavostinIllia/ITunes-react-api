import React from "react";
import styled from "styled-components";

const ErrorText = styled.p`
  text-align: center;
  font-size: 40px;
  color: #fff;
`;

interface ArtistErrorTextProps {
  errorText: string;
}

const ArtistErrorText: React.FC<ArtistErrorTextProps> = ({ errorText }) => {
  return <ErrorText>{errorText}</ErrorText>;
};
export default ArtistErrorText;
