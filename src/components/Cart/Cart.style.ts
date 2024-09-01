import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 30px 30px;

  .cartProducts {
    max-height: 340px;
    overflow-y: auto;
    padding-right: 20px;

    .product {
      display: flex;
      align-items: center;
      border-bottom: solid 1px #eee;

      .leftSide {
        display: flex;
        align-items: center;
        width: 60%;

        p {
          padding: 5px;
          font-size: small;
          display: flex;
          align-items: center;

          svg {
            padding: 5px;
          }

          @media (max-width: ${sizes.desktopLargeBreakPoint}) {
            margin: 0;
          }
        }

        h4 {
          @media (max-width: ${sizes.desktopLargeBreakPoint}) {
            width: 100%;
            margin: 0;
          }
        }

        @media (max-width: ${sizes.desktopLargeBreakPoint}) {
          flex-wrap: wrap;
        }
      }

      .rightSide {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 40%;

        h4 {
          margin-right: 40px;

          @media (max-width: ${sizes.mobileBreakPoint}) {
            width: 100%;
          }
        }

        @media (max-width: ${sizes.desktopLargeBreakPoint}) {
          justify-content: end;
        }

        @media (max-width: ${sizes.desktopBreakPoint}) {
          width: 100%;
        }

        @media (max-width: ${sizes.mobileBreakPoint}) {
          flex-wrap: wrap;
          justify-content: start;
        }
      }

      @media (max-width: ${sizes.desktopLargeBreakPoint}) {
        flex-wrap: wrap;
      }
    }

    .buttons {
      display: flex;
      padding: 5px;
      align-items: center;

      button {
        margin: 5px;
      }
    }
  }

  .totalPrice {
    display: flex;
    justify-content: end;
    align-items: center;

    h3 {
      padding: 5px;
    }
  }
`;
