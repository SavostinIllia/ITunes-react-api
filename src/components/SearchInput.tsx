import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
interface ISearchIput {
  getQuery(q: string): void;
}

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  margin: 60px 0;
  justify-content: center;
  font-family: "Montserrat";

  flex-wrap: wrap;
  @media (max-width: 540px) {
    margin: 0;
    align-items: baseline;
  }
`;

const SearchFormInput = styled.input`
  width: 400px;
  padding: 10px 20px;
  border: 1.5px solid #fff;
  background: transparent;
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  margin-right: 20px;
  font-weight: bold;
  font-family: "Montserrat";
  @media (max-width: 540px) {
    flex: 0 0 100%;
    max-width: 70%;
    margin-right: 0;
  }
`;

const SearchInput: React.FC<ISearchIput> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getQuery(text);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        autoFocus={true}
      />

      <ButtonComponent
        disabled={!text}
        type="submit"
        text="Fetch Artists"
        target="_blank"
      />
    </SearchForm>
  );
};

export default SearchInput;
