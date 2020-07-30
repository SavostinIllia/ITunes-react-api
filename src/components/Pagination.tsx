import React from "react";
import styled from "styled-components";

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
`;

const PaginationLi = styled.li`
  display: inline-block;
  list-style: none;
`;

const PaginationA = styled.a`
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
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-in-out;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  songsPerPage,
  totalSongs,
  paginate,
  currentPage,
}) => {
  // const [linkClass, setLinkClass] = useState("primary");
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickHandle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
    activeClass: boolean
  ) => {
    e.preventDefault();
    activeClass = !activeClass;
    console.log(id + 1, activeClass);
  };
  return (
    <>
      <PaginationNav>
        <PaginationUl>
          {pageNumbers.map((page: number, index: number) => {
            const activeClass: boolean = false;
            return (
              <PaginationLi key={Math.random() * 10}>
                <PaginationA
                  onClick={(e) => {
                    onClickHandle(e, index, activeClass);
                    paginate(page);
                  }}
                  href="!#"
                >
                  {page}
                </PaginationA>
              </PaginationLi>
            );
          })}
        </PaginationUl>
        {pageNumbers.length === 0 ? null : (
          <span>
            <strong>{currentPage}</strong> page of {pageNumbers.length} page(s)
          </span>
        )}
      </PaginationNav>
    </>
  );
};

export default Pagination;
