import { default as CarouselContainer } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselStyled } from "./Carousel.style";
import { CarouselProps } from "./Carousel.types";

const Carousel = (props: CarouselProps) => {
  const { children } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
    },
  };

  return (
    <CarouselStyled>
      <CarouselContainer
        swipeable={true}
        draggable={true}
        responsive={responsive}
        containerClass="carouselContainer"
      >
        {children}
      </CarouselContainer>
    </CarouselStyled>
  );
};

export default Carousel;
