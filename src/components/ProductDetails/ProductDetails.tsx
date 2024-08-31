import Carousel from "../Carousel/Carousel";
import InfoText from "./InfoText/InfoText";
import "react-multi-carousel/lib/styles.css";
import Image from "../Image/Image";
import Review from "./Review/Review";
import { Rating } from "react-simple-star-rating";
import { ProductDetailsStyled } from "./ProductDetails.style";
import { ProductDetailsProps } from "./ProductDetails.types";

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
          {product?.rating} / 5 ({product?.reviews.length} Recommended)
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
          <InfoText text={"Category"} information={product?.category} />
          <InfoText text={"Price"} information={product?.price} unit="€" />
          <InfoText
            text={"Discount"}
            information={product?.discountPercentage}
            unit="%"
          />
          <InfoText text={"Stock"} information={product?.stock} unit="qty" />
        </div>

        <div className="dimensions">
          <InfoText
            text={"Width"}
            information={product?.dimensions?.width}
            unit="cm"
          />
          <InfoText
            text={"Height"}
            information={product?.dimensions?.height}
            unit="cm"
          />
          <InfoText
            text={"Depth"}
            information={product?.dimensions?.depth}
            unit="cm"
          />
          <InfoText text={"Weight"} information={product?.weight} unit="kg" />
        </div>
        <div className="otherInfo">
          <InfoText
            text={"Shipping"}
            information={product?.shippingInformation}
          />
          <InfoText
            text={"Warranty"}
            information={product?.warrantyInformation}
          />
          <InfoText
            text={"Return policy"}
            information={product?.returnPolicy}
          />
        </div>
      </div>
      <h3>Reviews</h3>
      <Carousel>
        {product?.reviews.map((review, key) => (
          <Review key={key} {...review} />
        ))}
      </Carousel>
    </ProductDetailsStyled>
  );
};

export default ProductDetails;
