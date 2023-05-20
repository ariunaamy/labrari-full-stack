import { ReactNode } from "react";
import "./Modal.scss"

interface ModalProps {
  onClose?: () => void;
  children: ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
