import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const ProductCardStyled = styled.div`
  width: calc(25% - 32px);
  background-color: #fff;
  font-size: medium;
  padding: 10px;
  margin: 5px;
  border: #999 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${sizes.desktopLargeBreakPoint}) {
    width: calc(33% - 32px);
  }

  @media (max-width: ${sizes.desktopBreakPoint}) {
    width: calc(50% - 32px);
  }

  @media (max-width: ${sizes.tabletBreakPoint}) {
    width: calc(100% - 32px);
  }

  img {
    width: 90%;
  }
`;
