import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ButtonClear from "../ButtonClear/ButtonClear";
import { SearchStyled } from "./Search.style";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") ?? "";

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearchClick = () => {
    setSearchParams(
      (searchParams) => {
        searchParams.set("q", inputValue!);
        return searchParams;
      },
      { replace: true }
    );
  };

  const handleEnterClick = (e: { key: string }) => {
    e.key === "Enter" && handleSearchClick();
  };

  return (
    <SearchStyled>
      <input
        className="inputSearch"
        type="text"
        placeholder="search"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleEnterClick(e)}
        value={inputValue}
      />
      <div className="buttons">
        <div className="buttonSearch" onClick={handleSearchClick}>
          &#x1F50E;&#xFE0E;
        </div>
        {query && <ButtonClear queryArray={["q"]} />}
      </div>
    </SearchStyled>
  );
};

export default Search;
