import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div className="modal-body">
        <button className="btn" onClick={toogleModal}>
          React Modal
        </button>
        {modal && (
          <div className="modal">
            <div onClick={toogleModal} className="overlay"></div>
            <div className="modal-content">
              <button className="btn-close" onClick={toogleModal}>
                X
              </button>
              <h1>React Modal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus rem incidunt officia suscipit earum sequi, non nam
                cupiditate consequatur eveniet! Illo neque sint cum provident
                est aperiam quidem! Inventore, architecto?
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
