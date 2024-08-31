import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const PaginationStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  button {
    margin: 0 3px;
  }

  .selected {
    background-color: #eeeeee;
  }

  .textPages {
    font-weight: bold;
    display: none;
    margin: 0 20px;

    @media (max-width: ${sizes.desktopBreakPoint}) {
      display: block;
    }
  }

  .buttonPages {
    display: block;
    margin: 0 20px;

    @media (max-width: ${sizes.desktopBreakPoint}) {
      display: none;
    }
  }
`;
