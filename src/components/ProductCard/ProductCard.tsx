import { useState } from "react";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";
import Image from "../Image/Image";
import { ProductCardStyled } from "./ProductCard.style";
import { ProductCardProps } from "./ProductCard.types";
import AddToCart from "../Cart/AddToCart/AddToCart";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsClipboardPlusFill } from "react-icons/bs";

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ProductCardStyled onClick={() => setShowModal(!showModal)}>
        <div>
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            containerHeight={272}
          />
          <h2>{product?.title}</h2>
        </div>
        <div>
          <p>${product?.price}</p>
          <p>{product?.description?.substring(0, 100)}...</p>
          <p>
            <BsBoxSeamFill /> min. order: {product.minimumOrderQuantity}
          </p>
          <p>
            <BsClipboardPlusFill /> stock: {product.stock}
          </p>
          <AddToCart product={product} />
        </div>
      </ProductCardStyled>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ProductDetails product={product} />
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
