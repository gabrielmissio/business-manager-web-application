import React, { useState } from "react";
import Modal from "react-modal";
import ListRegisterView from './../../ListRegisterView/ListRegisterView'

Modal.setAppElement("#root");

export default function ServiceOrderModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return ( 
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        
        <ListRegisterView/>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}
