// File: src/components/Modal.tsx

import React, { useState, ReactNode, useEffect } from 'react';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  modalClass: string;
};

const Modal= (props: ModalProps ) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);

  useEffect(() => {
    setIsModalOpen(props.isOpen);
  }, [props.isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    props.onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 ${isModalOpen ? 'block' : 'hidden'}`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className={props.modalClass}>
         
          {props.children}
        </div>
      </div>
    </div>
  );
};

export {Modal};
