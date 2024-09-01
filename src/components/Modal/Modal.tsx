import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.style";
import { ModalProps } from "./Modal.types";
import { useEffect } from "react";

const Modal = (props: ModalProps) => {
  const { children, showModal, setShowModal } = props;
  const modalRoot = document.getElementById("modal-root")!;

  const handleCardClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector<HTMLElement>("body")!;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "";
    };
  }, [showModal]);

  return createPortal(
    <ModalStyled>
      <div className="modal">
        <button className="closeButton" onClick={handleCardClick}>
          X
        </button>
        {children}
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
