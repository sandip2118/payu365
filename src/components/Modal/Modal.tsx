// // File: src/components/Modal.tsx

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
    props.onClose();
  };


const handleContentClick = (e: React.MouseEvent) => {
  console.log("Modal content clicked");
  e.stopPropagation(); 
};

  return (
    <div className={`fixed inset-0 z-50 ${isModalOpen ? 'block' : 'hidden'}`}   onClick={handleClose}>
      <div
        className="fixed inset-0 bg-BLACK_302 opacity-80"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className={props.modalClass} onClick={handleContentClick}>
         
          {props.children}
        </div>
      </div>
    </div>
  );
};

export {Modal};