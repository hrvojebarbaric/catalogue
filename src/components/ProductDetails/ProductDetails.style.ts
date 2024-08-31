import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const ProductDetailsStyled = styled.div`
  padding: 20px;

  h2,
  p {
    margin: 5px;
  }

  .ratingContainer {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      padding: 0 0 5px 10px;
    }
  }

  .information {
    display: flex;
    flex-wrap: wrap;

    .generalInfo,
    .dimensions,
    .otherInfo {
      display: block;
      width: 31%;

      @media (max-width: ${sizes.mobileBreakPoint}) {
        width: 100%;
      }
    }
  }

  .rating {
    .star-svg {
      width: 20px;
      height: 20px;
    }
  }
`;
