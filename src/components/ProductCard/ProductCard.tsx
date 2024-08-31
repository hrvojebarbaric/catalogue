import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";
import Image from "../Image/Image";
import { ProductCardStyled } from "./ProductCard.style";
import { ProductCardProps } from "./ProductCard.types";

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector<HTMLElement>("body")!;

    body.style.overflow = showModal ? "hidden" : "";
  }, [showModal]);

  return (
    <>
      <ProductCardStyled onClick={handleCardClick}>
        <div>
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            containerHeight={272}
          />
          <h2>{product?.title}</h2>
        </div>
        <div>
          <p>{product?.price}</p>
          <p>{product?.description?.substring(0, 100)}...</p>
        </div>
      </ProductCardStyled>
      {showModal && (
        <Modal>
          <button className="closeButton" onClick={handleCardClick}>
            X
          </button>
          <ProductDetails product={product} />
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
