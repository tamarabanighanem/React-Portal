import './App.css';
import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Hello from the modal!</h2>
        <p>This content is rendered outside of the parent component.</p>
      </Modal>
    </div>
  );
}

export default App;
