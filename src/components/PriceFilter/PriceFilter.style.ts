import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const PriceFilterStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  width: 40%;

  .slider {
    width: 100%;
    max-width: 350px;
    margin: 0 20px;

    .rc-slider-handle,
    .rc-slider-dot-active {
      border-color: #000;
      z-index: 0;
    }

    .rc-slider-track {
      background-color: #000;
    }

    @media (max-width: ${sizes.mobileBreakPoint}) {
      margin: 0 20px 30px;
    }
  }

  @media (max-width: ${sizes.desktopBreakPoint}) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${sizes.mobileBreakPoint}) {
    flex-wrap: wrap;
    width: 300px;
    padding: 16px 0;
  }
`;
