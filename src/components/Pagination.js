import React from "react";

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={Math.random() * 10}>
              <a onClick={() => paginate(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
