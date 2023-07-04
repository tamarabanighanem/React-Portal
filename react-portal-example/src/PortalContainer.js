// src/PortalContainer.js
import React from 'react';
import ReactDOM from 'react-dom';

const PortalContainer = ({ children }) => {
  const portalContainer = document.getElementById('portal-container');
  return ReactDOM.createPortal(children, portalContainer);
};

export default PortalContainer;
