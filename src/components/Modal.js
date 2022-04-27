import React from "react";

const Modal = ({ show, onClose, src, alt, title, text }) => {
  return show ? (
    <div className="modal" onClick={onClose}>
      <div className="modal-card">
        <div className="modal-close" onClick={onClose}>
          &#10006;
        </div>
        <div className="sides">
          <img className="bottom-l" src={src} alt={alt} />
          <h2 className="bottom">{title}</h2>
          <p className="bottom-l">{text}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
