import React, { useState } from "react";
import styled from "styled-components";

interface PaginationLinkProps {
  pages: number[];
  paginate(length: number): void;
}

interface PaginationLink {
  isActive: boolean;
  id: number;
  class: string;
}

const PaginationLinkWrapper = styled.li`
  display: inline-block;
`;

const PaginationLinkButton = styled.a`
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  display: inline-block;
  border: 1.5px solid #fff;
  margin: 0 5px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: inset 8px 8px 8px rgba(255, 255, 255, 0.5);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 6px;

  &:hover {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
  &.active {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const PaginationLink: React.FC<PaginationLinkProps> = ({ pages, paginate }) => {
  const refactorPagesArray = (array: number[]) => {
    const pagesLinkObject: PaginationLink[] = [];
    array.reduce((acc, index: number) => {
      acc = {
        isActive: false,
        id: index,
        class: "",
      };
      pagesLinkObject.push(acc);
      return acc;
    }, {} as PaginationLink);
    return pagesLinkObject;
  };
  const refactoredPagesArray = refactorPagesArray(pages);

  const setActiveElement = (activeElement: PaginationLink): PaginationLink => ({
    isActive: !activeElement.isActive,
    id: activeElement.id,
    class: "active",
  });

  const setInitialArray = (element: PaginationLink) => {
    const arrayExceptFirstElement = refactoredPagesArray.filter(
      (item: PaginationLink) => item.id !== element.id
    );
    const initialActiveElement: PaginationLink =
      element.id === 1 ? setActiveElement(element) : element;
    const initialArray: PaginationLink[] = [
      initialActiveElement,
      ...arrayExceptFirstElement,
    ];
    return initialArray;
  };

  const [renderPageLinks, setRenderPageLinks] = useState<PaginationLink[]>(
    setInitialArray(refactoredPagesArray[0])
  );

  const resetAllClasses = () => {
    renderPageLinks.forEach((element: PaginationLink) => {
      element.isActive = false;
      element.class = "";
    });
  };

  const onClickHandler = (id: number) => {
    resetAllClasses();
    const allElementsExceptActive = renderPageLinks.filter(
      (element: PaginationLink) => element.id !== id
    );
    const elementToChangeClass: any = renderPageLinks.find(
      (item: PaginationLink) => item.id === id
    );
    const newElement = setActiveElement(elementToChangeClass);
    const newArrayOfElements = [...allElementsExceptActive, newElement];
    const sortedNewArrayOfElement = newArrayOfElements.sort(
      (a: PaginationLink, b: PaginationLink) => (a.id < b.id ? -1 : 1)
    );

    return setRenderPageLinks(sortedNewArrayOfElement);
  };

  return (
    <>
      {renderPageLinks.map((item: PaginationLink, index: number) => {
        return (
          <PaginationLinkWrapper key={index}>
            <PaginationLinkButton
              onClick={() => {
                onClickHandler(item.id);
                paginate(item.id);
              }}
              className={item.class}
            >
              {item.id}
            </PaginationLinkButton>
          </PaginationLinkWrapper>
        );
      })}
    </>
  );
};
export default PaginationLink;
