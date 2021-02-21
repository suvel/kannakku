import React from "react";
import "../../css/modal.css";
/**
 * buttons data structure
 * {symb:'',click:()=>{}}
 */
const Modal = ({ open = false, buttons = [], children }) => {
  const modalSwitchClass = open ? "open" : "close";
  return (
    <div className={`modal ${modalSwitchClass}`}>
      <div className="mod-head">
        {buttons.map((btn) => (
          <button
            style={{ background: btn.color || "transparent" }}
            onClick={btn.clickFn}
          >
            {btn.symb}
          </button>
        ))}
      </div>
      <div className="mod-body">{children}</div>
    </div>
  );
};

export default Modal;
