import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const SearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 50px 0;

  .inputSearch {
    padding: 5px 10px;
    border-radius: 10px;
    width: 400px;
    font-size: large;

    @media (max-width: ${sizes.desktopBreakPoint}) {
      width: 200px;
      font-size: initial;
    }
  }

  .buttons {
    position: absolute;
    left: calc(50% + 180px);
    padding: 3px 6px;
    display: flex;

    .buttonSearch {
      padding-right: 15px;
    }

    &:hover {
      cursor: pointer;
    }

    @media (max-width: ${sizes.desktopBreakPoint}) {
      left: calc(50% + 84px);
    }
  }

  @media (max-width: ${sizes.desktopBreakPoint}) {
    margin: 0;

    .buttons {
      left: calc(50% + 84px);
    }
  }
`;
