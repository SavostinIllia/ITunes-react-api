import React, { useEffect, useState } from "react";
import { AnyARecord } from "dns";

interface PaginationLinkProps {
  page: number[];
  handleActiveElement: React.Dispatch<
    React.SetStateAction<Record<number, boolean> | null>
  >;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ page }) => {
  const initialValue = {};
  // const setDefaultFlagsToElements = (): Record<number, boolean>[] => [
  //   page.reduce((prev: any, current: any) => {
  //     prev[current] = false;
  //     return prev;
  //   }, initialValue),
  // ];

  const convertArrayToObject = (array: any, key: any) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  console.log(convertArrayToObject(page, "id"));

  const [pageRecords, setPageRecords] = useState<Record<number, boolean>[]>();
  // setDefaultFlagsToElements()
  console.log(pageRecords);

  return <li></li>;
};
export default PaginationLink;
