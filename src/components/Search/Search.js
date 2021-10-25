import React from "react";
import { Wrapper, SearchInput, SearchButton } from "./Search.style";

const Search = () => {
  return (
    <Wrapper>
      <form>
        <SearchInput type="text" name="search" placeholder="search..." />
        <SearchButton type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon--s"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </SearchButton>
      </form>
    </Wrapper>
  );
};

export default Search;
