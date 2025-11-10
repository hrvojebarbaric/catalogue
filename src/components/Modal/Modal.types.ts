import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
