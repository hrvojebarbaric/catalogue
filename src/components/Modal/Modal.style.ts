import styled from "styled-components";
import { sizes } from "../../globalStyle";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    width: 70%;
    max-width: 1000px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    position: relative;
    z-index: 100;

    .closeButton {
      position: absolute;
      right: 20px;
      border: 1px solid #999;
      border-radius: 20px;
    }

    @media (max-width: ${sizes.tabletBreakPoint}) {
      width: 95%;
      height: 95%;
      overflow-x: auto;
    }
  }
`;
