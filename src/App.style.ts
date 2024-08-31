import styled from "styled-components";
import { sizes } from "./globalStyle";

export const AppStyled = styled.div`
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
`;
