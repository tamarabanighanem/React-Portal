// src/Modal.js
import React from 'react';
import PortalContainer from './PortalContainer';
import './Modal.css'; // Import the CSS file

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <PortalContainer>
      <div className="modal">
        <div className="modal-content">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </PortalContainer>
  );
};

export default Modal;
