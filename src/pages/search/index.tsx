import React from "react";
import "./index.css";

interface SearchProps {
  title?: string;
}

const Search: React.FC<SearchProps> = ({ title }) => {
  if (title === undefined) {
    return <></>;
  }

  return <div>{title}</div>;
};

export default Search;
