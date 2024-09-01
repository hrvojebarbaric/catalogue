import styled from "styled-components";
import { sizes } from "./globalStyle";

export const AppStyled = styled.div`
  position: relative;

  .sortAndFilters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    @media (max-width: ${sizes.desktopBreakPoint}) {
      justify-content: center;
    }
  }

  .openCart {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    p {
      font-size: large;
      font-weight: bold;
      margin: 0 0 0 10px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${sizes.tabletBreakPoint}) {
    position: static;
  }
`;
