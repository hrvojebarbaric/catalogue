import Carousel from "../Carousel/Carousel";
import InfoText from "./InfoText/InfoText";
import "react-multi-carousel/lib/styles.css";
import Image from "../Image/Image";
import Review from "./Review/Review";
import { Rating } from "react-simple-star-rating";
import { ProductDetailsStyled } from "./ProductDetails.style";
import { ProductDetailsProps } from "./ProductDetails.types";
import { text } from "../../translations/en";

const ProductDetails = (props: ProductDetailsProps) => {
  const { product } = props;

  return (
    <ProductDetailsStyled>
      <h2>{product?.title}</h2>
      <div className="ratingContainer">
        <Rating
          className="rating"
          initialValue={product?.rating}
          readonly={true}
          allowFraction={true}
        />
        <p>
          {product?.rating} {text.content.maxRating} ({product?.reviews.length}{" "}
          {text.content.recommended})
        </p>
      </div>
      <p>{product?.description}</p>
      <Carousel>
        {product?.images.map((image, key) => (
          <Image key={key} src={image} />
        ))}
      </Carousel>
      <div className="information">
        <div className="generalInfo">
          <InfoText
            text={text.content.category}
            information={product?.category}
          />
          <InfoText
            text={text.content.price}
            information={product?.price}
            unit={text.symbols.dollar}
          />
          <InfoText
            text={text.content.discount}
            information={product?.discountPercentage}
            unit={text.symbols.percentage}
          />
          <InfoText
            text={text.content.stock}
            information={product?.stock}
            unit={text.content.qty}
          />
        </div>

        <div className="dimensions">
          <InfoText
            text={text.content.width}
            information={product?.dimensions?.width}
            unit={text.content.measurementUnit}
          />
          <InfoText
            text={text.content.height}
            information={product?.dimensions?.height}
            unit={text.content.measurementUnit}
          />
          <InfoText
            text={text.content.depth}
            information={product?.dimensions?.depth}
            unit={text.content.measurementUnit}
          />
          <InfoText
            text={text.content.weight}
            information={product?.weight}
            unit={text.content.weightUnit}
          />
        </div>
        <div className="otherInfo">
          <InfoText
            text={text.content.shipping}
            information={product?.shippingInformation}
          />
          <InfoText
            text={text.content.warranty}
            information={product?.warrantyInformation}
          />
          <InfoText
            text={text.content.returnPolicy}
            information={product?.returnPolicy}
          />
        </div>
      </div>
      <h3>{text.content.reviews}</h3>
      <Carousel>
        {product?.reviews.map((review, key) => (
          <Review key={key} {...review} />
        ))}
      </Carousel>
    </ProductDetailsStyled>
  );
};

export default ProductDetails;
