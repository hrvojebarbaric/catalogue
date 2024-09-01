import useLocalStorageState from "use-local-storage-state";
import { CartType } from "./Cart.types";
import { CartStyled } from "./Cart.style";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsClipboardPlusFill } from "react-icons/bs";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState<CartType>("cart", {});

  const getProducts = () => Object.values(cart || {});

  const handleRemoveProduct = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation?: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  return (
    <CartStyled>
      <h2>Cart</h2>
      <div className="cartProducts">
        {getProducts().map((product) => {
          const price =
            product.price * product.quantity * product.minimumOrderQuantity;

          return (
            <div key={product.id} className="product">
              <div className="leftSide">
                <h4>{product.title}</h4>
                <p>
                  <BsClipboardPlusFill /> {product.minimumOrderQuantity}
                </p>
                <p>
                  <BsBoxSeamFill />
                  {product.stock -
                    product.quantity * product.minimumOrderQuantity}
                </p>
              </div>
              <div className="rightSide">
                <h4>${Math.ceil(price)}</h4>
                <div className="buttons">
                  <button
                    disabled={price <= 0}
                    onClick={() => handleUpdateQuantity(product.id)}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    disabled={
                      product.quantity * product.minimumOrderQuantity +
                        product.minimumOrderQuantity >=
                      product.stock
                    }
                    onClick={() => handleUpdateQuantity(product.id, "increase")}
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="totalPrice">
        Total:
        <h3>
          $
          {Math.ceil(
            getProducts().reduce(
              (accumulator, product) =>
                accumulator +
                product.price * product.quantity * product.minimumOrderQuantity,
              0
            )
          )}
        </h3>
      </div>
    </CartStyled>
  );
};

export default Cart;
