import Spinner from "../Spinner/Spinner";
import { useSearchParams } from "react-router-dom";
import { CategoryFilterStyled } from "./CategoryFilter.style";
import { text } from "../../translations/en";
import products from "../../services/products/hooks";

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "all";

  const { isPending, isError, data, error } =
    products.GetCategoryList.useQuery();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <span>
        {text.content.error} {error.message}
      </span>
    );
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
      <p>{text.content.filterCategory}</p>
      <select
        name="categories"
        onChange={(e) => handleDropDownChange(e.target.value)}
        defaultValue={category}
      >
        <option value="all">{text.content.allCategories}</option>
        {data?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
