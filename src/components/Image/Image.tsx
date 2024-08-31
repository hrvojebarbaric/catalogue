import LazyLoad from "react-lazyload";
import { ImageStyled } from "./Image.style";
import { ImageProps } from "./Image.types";

const Image = (props: ImageProps) => {
  const {
    src,
    alt,
    className = "",
    disableLazyLoad = false,
    containerHeight,
  } = props;

  return disableLazyLoad ? (
    <ImageStyled src={src} alt={alt} className={className} />
  ) : (
    <LazyLoad height={containerHeight}>
      <ImageStyled src={src} alt={alt} className={className} />
    </LazyLoad>
  );
};

export default Image;
