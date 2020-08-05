import React from "react";
import styled from "styled-components";
import PaginationLink from "./PaginationLink";
interface PaginationProps {
  songsPerPage: number;
  totalSongs: number;
  paginate(length: number): void;
  currentPage: number;
}

const PaginationNav = styled.nav`
  flex: 0 0 100%;
  margin: 0 auto 50px;
  text-align: center;
`;

const PaginationPagesInformation = styled.span`
  display: inline-block;
  margin-top: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

const PaginationUl = styled.ul`
  width: 100%;
  max-width: 900px;
  list-style: none;
  margin: 0 auto;
  text-align: center;
  padding: 0;
`;

const Pagination: React.FC<PaginationProps> = ({
  songsPerPage,
  totalSongs,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers && pageNumbers.length > 0 ? (
        <PaginationNav>
          <PaginationUl>
            <PaginationLink pages={pageNumbers} paginate={paginate} />
          </PaginationUl>
          <PaginationPagesInformation>
            {currentPage} from {pageNumbers.length}
          </PaginationPagesInformation>
        </PaginationNav>
      ) : null}
    </>
  );
};

export default Pagination;
