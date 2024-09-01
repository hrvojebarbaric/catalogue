import { useSearchParams } from "react-router-dom";
import ButtonClear from "../ButtonClear/ButtonClear";
import { SortByStyled } from "./SortBy.style";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByProperties = [
    { btnText: "Name", sortByProperty: "title" },
    { btnText: "Price", sortByProperty: "price" },
  ];

  const sortBy = searchParams.get("sortBy") ?? "";
  const order = searchParams.get("order") ?? "";

  const handleSortClick = (sortBy?: string) => {
    const orderSearch = order === "ASC" ? "DESC" : "ASC";
    setSearchParams(
      (searchParams) => {
        searchParams.set("sortBy", sortBy!);
        searchParams.set("order", orderSearch);
        return searchParams;
      },
      { replace: true }
    );
  };

  const arrow = order === "ASC" ? <span>&#8593;</span> : <span>&#8595;</span>;

  const renderSortButton = (buttonText: string, sortName: string) => {
    return (
      <span
        key={buttonText}
        className={`sortButton ${sortBy === sortName && "selected"}`}
        onClick={() => handleSortClick(sortName)}
      >
        {buttonText} {sortBy === sortName && arrow}
      </span>
    );
  };

  return (
    <SortByStyled>
      <p>Sort by:</p>
      {sortByProperties.map((item) =>
        renderSortButton(item.btnText, item.sortByProperty)
      )}
      {sortBy && <ButtonClear queryArray={["sortBy", "order"]} />}
    </SortByStyled>
  );
};

export default SortBy;
