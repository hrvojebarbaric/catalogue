import ProductList from "./components/ProductList/ProductList";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import SortBy from "./components/SortBy/SortBy";
import Search from "./components/Search/Search";
import PriceFilter from "./components/PriceFilter/PriceFilter";
import { AppStyled } from "./App.style";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { BsCart4 } from "react-icons/bs";
import useLocalStorageState from "use-local-storage-state";
import { CartType } from "./components/Cart/Cart.types";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cart] = useLocalStorageState<CartType>("cart", {});

  const getProducts = () => Object.values(cart || {});

  return (
    <AppStyled>
      <button
        disabled={getProducts().length === 0}
        className="openCart"
        onClick={() => setShowModal(true)}
      >
        <BsCart4 size="2em" />
        <p>{getProducts().length}</p>
      </button>
      <h1>Product catalog</h1>
      <Search />
      <div className="sortAndFilters">
        <PriceFilter />
        <SortBy />
        <CategoryFilter />
      </div>
      <ProductList />
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Cart />
        </Modal>
      )}
    </AppStyled>
  );
};

export default App;
