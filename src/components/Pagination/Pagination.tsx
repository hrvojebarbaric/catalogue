import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS_PER_PAGE } from "../../constants/products";
import { PaginationStyled } from "./Pagination.style";
import { PaginationProps } from "./Pagination.types";

const Pagination = (props: PaginationProps) => {
  const { total } = props;

  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1");
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  useEffect(() => {
    if (total && page > totalPages) {
      setSearchParams((searchParams) => {
        searchParams.set("page", `${totalPages}`);
        return searchParams;
      });
    } else if (total && page < 1) {
      setSearchParams((searchParams) => {
        searchParams.set("page", `${1}`);
        return searchParams;
      });
    }
  }, [page, setSearchParams, total, totalPages]);

  const handleClick = (page: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", `${page}`);
      return searchParams;
    });
  };

  const renderPageButtons = Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;
    return (
      <button
        key={pageNumber}
        onClick={() => handleClick(pageNumber)}
        className={page === pageNumber ? "selected" : ""}
      >
        {pageNumber}
      </button>
    );
  });

  return (
    <PaginationStyled>
      <button disabled={!(page > 1)} onClick={() => handleClick(page - 1)}>
        Previous
      </button>
      <div className="buttonPages">{renderPageButtons}</div>
      <p className="textPages">
        {page} / {totalPages}
      </p>
      <button
        disabled={!(totalPages > page)}
        onClick={() => handleClick(page + 1)}
      >
        Next
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
