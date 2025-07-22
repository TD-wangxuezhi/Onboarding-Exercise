import React, { useEffect } from "react";
import "./index.css";

interface SearchProps {
  title?: string;
  onMount?: () => void;
}

const Search: React.FC<SearchProps> = ({ title, onMount }) => {
  useEffect(() => {
    onMount?.();
  }, [onMount]);

  if (title === undefined) {
    return <></>;
  }

  return <div>{title}</div>;
};

export default Search;
