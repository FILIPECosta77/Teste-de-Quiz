import React, { useContext } from "react";
import { myContext } from "../../context/myContext";
import { StyledButton } from "../buttons/button";
import { StyleModal } from "./style";
import Contents from "./ModalContents";

const Modal = () => {
  const { showModal, setShowModal, setShowPoints } = useContext(myContext);

  return (
    <StyleModal>
      <section className="modal">
        <StyledButton
          type="button"
          onClick={() => {
            setShowModal(!showModal);
            setShowPoints(true);
          }}
        >
          Fechar
        </StyledButton>
        <Contents />
      </section>
    </StyleModal>
  );
};

export default Modal;
