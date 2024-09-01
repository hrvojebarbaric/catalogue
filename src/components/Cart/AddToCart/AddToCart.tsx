import useLocalStorageState from "use-local-storage-state";
import { Product } from "../../../utils/api/products";
import { CartType } from "../Cart.types";
import { AddToCartProps } from "./AddToCart.types";
import { MouseEvent } from "react";

const AddToCart = (props: AddToCartProps) => {
  const { product } = props;
  const [cart, setCart] = useLocalStorageState<CartType>("cart", {});

  const addToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    product: Product
  ) => {
    e.stopPropagation();
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId: number) =>
    Object.keys(cart || {}).includes(productId.toString());

  return (
    <div>
      <button
        disabled={
          isInCart(product.id) || product.stock <= product.minimumOrderQuantity
        }
        onClick={(e) => addToCart(e, product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
