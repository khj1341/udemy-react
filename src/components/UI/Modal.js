import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onCloseCart }) => {
  return <div className={classes.backdrop} onClick={onCloseCart} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.body;

const Modal = ({ onCloseCart, children }) => {
  return (
    <>
      {/* {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )} */}
      {ReactDOM.createPortal(
        <>
          <Backdrop onCloseCart={onCloseCart} />
          <ModalOverlay>{children}</ModalOverlay>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
