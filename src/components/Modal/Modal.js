import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const ANIMATION_TIMING = {
  enter: 1000,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={ANIMATION_TIMING}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        // appear: '',
        // appearActive: '',
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
