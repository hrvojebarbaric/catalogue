import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const SortByStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;

  .sortButton {
    padding: 3px 15px;
    margin: 0 5px;
    border: 1px solid #999;
    border-radius: 15px;
    user-select: none;

    &:hover {
      cursor: pointer;
      background-color: #eee;
    }

    @media (max-width: ${sizes.mobileBreakPoint}) {
      width: 90%;
      margin: 5px 0;
      justify-content: center;
    }
  }

  .selected {
    background-color: #eee;
  }

  @media (max-width: ${sizes.desktopBreakPoint}) {
    margin-right: 10px;
  }

  @media (max-width: ${sizes.tabletBreakPoint}) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${sizes.mobileBreakPoint}) {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
  }
`;
