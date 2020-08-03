import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
interface ISearchIput {
  getQuery(q: string): void;
}

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  margin-top: 60px;
  justify-content: center;
  font-family: "Montserrat";
  margin-bottom: 60px;
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
