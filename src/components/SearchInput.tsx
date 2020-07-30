import React, { useState } from "react";
import styled from "styled-components";
interface ISearchIput {
  getQuery(q: string): void;
}

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  margin-top: 60px;
  justify-content: center;
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
`;

const SearchButton = styled.button`
  background: transparent;
  border-radius: 5px;
  outline: none;
  border: 1.5px solid #fff;
  font-size: 18px;
  padding: 5px 10px;
  color: #fff;
  &:active {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const SearchInput: React.FC<ISearchIput> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Enter pls the name of artist");
      setText("");
      return;
    }
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
        autoFocus
      />
      <SearchButton type="submit">Search Artist</SearchButton>
    </SearchForm>
  );
};

export default SearchInput;
