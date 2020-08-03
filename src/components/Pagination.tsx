import React, { useState } from "react";
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
`;

const PaginationUl = styled.ul`
  width: 100%;
  max-width: 900px;
  list-style: none;
  margin: 0 auto;
  text-align: center;
  padding: 0;
`;

const PaginationLi = styled.li`
  display: inline-block;
  list-style: none;
`;

const PaginationPage = styled.a`
  border: 1.5px solid #fff;
  border-radius: 5px;
  background: transparent;
  text-decoration: none;
  padding: 10px 15px;
  margin: 5px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: bold;
`;

const Pagination: React.FC<PaginationProps> = ({
  songsPerPage,
  totalSongs,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];
  const [paginationLinks, setPaginationLinks] = useState<number[]>([]);

  const [activeElement, setActiveElement] = useState<Record<
    number,
    boolean
  > | null>(null);

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers && pageNumbers.length > 0 ? (
        <PaginationNav>
          <PaginationUl>
            <PaginationLink
              page={pageNumbers}
              handleActiveElement={setActiveElement}
            />
          </PaginationUl>
          <span>
            {currentPage} from {pageNumbers.length}
          </span>
        </PaginationNav>
      ) : null}
    </>
  );
};

export default Pagination;
