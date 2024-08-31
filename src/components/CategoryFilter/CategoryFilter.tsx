import products from "../../utils/api/products";
import Spinner from "../Spinner/Spinner";
import { useSearchParams } from "react-router-dom";
import { CategoryFilterStyled } from "./CategoryFilter.style";

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "all";

  const { isPending, isError, data, error } =
    products.GetCategoryList.useQuery();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleDropDownChange = (category: string) => {
    setSearchParams(
      (searchParams) => {
        searchParams.set("category", category);
        return searchParams;
      },
      { replace: true }
    );
  };

  return (
    <CategoryFilterStyled>
      <p>Filter by category:</p>
      <select
        name="categories"
        onChange={(e) => handleDropDownChange(e.target.value)}
        defaultValue={category}
      >
        <option value="all">all categories</option>
        {data.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
