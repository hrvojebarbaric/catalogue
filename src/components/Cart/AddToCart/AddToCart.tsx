import useLocalStorageState from "use-local-storage-state";
import { CartType } from "../Cart.types";
import { AddToCartProps } from "./AddToCart.types";
import { MouseEvent } from "react";
import { Product } from "../../../utils/api/products/types";
import { text } from "../../../translations/en";

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
        {text.buttons.addToCart}
      </button>
    </div>
  );
};

export default AddToCart;
