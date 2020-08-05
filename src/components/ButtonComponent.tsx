import React from "react";
import styled from "styled-components";
import classNames from "classnames";

interface ButtonComponentProps {
  text: string;
  type: "submit" | "text";
  href?: string;
  disabled?: boolean;
  target?: string;
}

const SearchSubmitButton = styled.button`
  background: transparent;
  border-radius: 5px;
  outline: none;
  border: 1.5px solid #fff;
  font-size: 18px;
  padding: 5px 10px;
  color: #fff;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  cursor: pointer;
  font-family: "Montserrat";
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: inset 5px 5px 5px rgba(55, 55, 55, 0.5);
    transition: 0.3s ease-in-out;
  }
  &:active {
    box-shadow: inset 10px 10px 10px 0px rgba(55, 55, 55, 0.5);
  }
  &.disableButton {
    box-shadow: none;
    cursor: not-allowed;
    background: #ccc;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const ArtistMoreButton = styled.a`
  text-align: left;
  display: block;
  width: auto;
  margin-right: auto;
  font-size: 18px;
  color: #fff;
  border: 1.5px solid #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 28px;
  text-decoration: none;
  position: absolute;
  bottom: 90px;
  transition: 0.3s ease-in-out;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: inset 5px 5px 5px rgba(55, 55, 55, 0.5);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  type,
  href,
  target,
  disabled,
}) => {
  const disableButton = classNames({
    disableButton: disabled,
  });
  return (
    <>
      {type === "submit" ? (
        <SearchSubmitButton
          disabled={disabled}
          type={type}
          className={disableButton}
        >
          {text}
        </SearchSubmitButton>
      ) : (
        <ArtistMoreButton href={href} target={target}>
          {text}
        </ArtistMoreButton>
      )}
    </>
  );
};
export default ButtonComponent;
