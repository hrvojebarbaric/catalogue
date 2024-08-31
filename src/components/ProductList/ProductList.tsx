import products from "../../utils/api/products";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { ProductListStyled } from "./ProductList.style";

const ProductList = () => {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? undefined;
  const sortBy = searchParams.get("sortBy") ?? "";
  const order = searchParams.get("order") ?? "";
  const search = searchParams.get("q") ?? "";
  const priceMin = parseInt(searchParams.get("priceMin") ?? "0");
  const priceMax = parseInt(searchParams.get("priceMax") ?? "501");

  const isPriceFilter = !(priceMin === 0 && priceMax === 501);

  const { isPending, isError, data, error } = products.GetProducts.useQuery(
    page,
    priceMin,
    priceMax,
    category,
    sortBy,
    order,
    search
  );

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We need to implement price range on api.
  // Right now api function call all products (197) when price range filter is on
  const lastPageIndex = page * 20;
  const firstPageIndex = lastPageIndex - 20;

  const priceFilterData = data.products.filter((product) =>
    priceMax < 500
      ? product.price >= priceMin && product.price <= priceMax
      : product.price >= priceMin
  );

  const priceSlicedData = priceFilterData.slice(firstPageIndex, lastPageIndex);

  return (
    <ProductListStyled>
      <Pagination total={isPriceFilter ? priceFilterData.length : data.total} />
      {isPriceFilter
        ? priceSlicedData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      <Pagination total={isPriceFilter ? priceFilterData.length : data.total} />
    </ProductListStyled>
  );
};

export default ProductList;
