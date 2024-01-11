import React, { useState } from 'react'
import PermanentlyDelete from './PermanentlyDelete';
import { Modal } from '../../Modal/Modal';

function PermanentlyDeactivate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPermanentlyDeleting = () => {
    console.log('Permanently Deleting');
    console.log('Permanently Deleting')
    setIsModalOpen(true);
  };

  const handleClose = () => {
    console.log('should close');
    setIsModalOpen(!isModalOpen); 
  };

  return (
    <div className='bg-[#1C1C24] w-100% px-4 rounded-[5px]'>
        <div className='grid md:flex justify-between items-center py-[20px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px] mb-[20px]'>
    <div className='grid text-start gap-[10px]'>
      <div className=' font-[500] text-[16px] md:text-[20px] text-white'>Permanently Remove Account</div>
      <div className='text-[12px] md:text-[14px] font-[400] md:font-[500] text-GRAY_101'>If you have made your decision anyway!</div>
    </div>
    <div>
      <button className='font14RB text-white bg-[#FA6C4C] rounded-[5px] w-[184px] h-[40px] ' onClick={onPermanentlyDeleting}>Permanently Remove</button>
    </div>
  </div>
  <Modal isOpen={isModalOpen} onClose={handleClose} modalClass="permanently-delete-modal">
        <PermanentlyDelete  />
      </Modal>
    </div>
  )
}

export default PermanentlyDeactivate;