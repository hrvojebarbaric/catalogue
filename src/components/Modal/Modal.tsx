import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.style";
import { ModalProps } from "./Modal.types";

const Modal = (props: ModalProps) => {
  const { children } = props;
  const modalRoot = document.getElementById("modal-root")!;

  return createPortal(
    <ModalStyled>
      <div className="modal">{children}</div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
