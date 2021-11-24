import React from "react";
import { usePagination } from "../../hooks/usePagination";

import { PaginationList, PaginationBtn } from "./Pagination.style";

export const Pagination = ({ data }) => {
  const { pages } = usePagination(data);

  return (
    <PaginationList>
      {pages.map((number) => (
        <PaginationBtn key={number}>{number}</PaginationBtn>
      ))}
    </PaginationList>
  );
};
