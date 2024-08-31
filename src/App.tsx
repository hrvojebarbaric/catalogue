import ProductList from "./components/ProductList/ProductList";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import SortBy from "./components/SortBy/SortBy";
import Search from "./components/Search/Search";
import PriceFilter from "./components/PriceFilter/PriceFilter";
import { AppStyled } from "./App.style";

const App = () => {
  return (
    <AppStyled>
      <h1>Product catalog</h1>
      <Search />
      <div className="sortAndFilters">
        <PriceFilter />
        <SortBy />
        <CategoryFilter />
      </div>
      <ProductList />
    </AppStyled>
  );
};

export default App;
