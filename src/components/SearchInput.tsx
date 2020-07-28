import React, { useState } from "react";

interface ISearchIput {
  getQuery: (q: string) => void;
  getItems?: any;
}

const SearchInput: React.FC<ISearchIput> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text) {
      alert("Enter pls the name of artist");

      setText("");
      return;
    }
    getQuery(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button type="submit">FETCH</button>
    </form>
  );
};

export default SearchInput;
