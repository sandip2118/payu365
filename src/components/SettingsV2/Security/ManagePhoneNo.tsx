import React, { useState } from 'react'
import CardWrapper from '../SettingsCommons/CardWrapper'
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader'
import PhoneWithCountryCode from '../../Login/PhoneWithCountryCode';
import AreYouSure from './Modals/AreYouSure';
import { Modal } from '@/components/Modal/Modal';
import EnterOTPComponent from './Modals/EnterOTP';
import UpdateNew from './Modals/UpdateNew';
import Successful from './Modals/Successful';

function ManagePhoneNo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');

  const handlePhoneChange = (newValue: string | undefined) => {
    setPhone(newValue);
  };

  const handleClose = () => {
    console.log('should close');
    setIsModalOpen(!isModalOpen); 
  };


const onOpenModal =()=>{
  console.log('onOpenModal');
  setIsModalOpen(true)
}

const ModalStage = {
  AreYouSure: 'AreYouSure',
  EnterOTP: 'EnterOTP',
  UpdateNew: 'UpdateNew',
  Successful: 'Successful'
};
const [currentModalStage, setCurrentModalStage] = useState(ModalStage.AreYouSure);
const goToEnterOTP = () => setCurrentModalStage(ModalStage.EnterOTP);
const goToUpdateNew = () => setCurrentModalStage(ModalStage.UpdateNew);
const goToSuccessful = () => setCurrentModalStage(ModalStage.Successful);

const renderModalContent = () => {
  switch (currentModalStage) {
    case ModalStage.AreYouSure:
      return <AreYouSure onContinue={goToEnterOTP} />;

      case ModalStage.EnterOTP:
        return <EnterOTPComponent onValidOTP={goToUpdateNew} />;  

    case ModalStage.UpdateNew:
      return <UpdateNew onUpdate={goToSuccessful} />;
  
    case ModalStage.Successful:
      return <Successful title='Successfully Updated Mobile Number' description='Please Log in with updated mobile number to gain back access of your account'  route='Login' buttonText='Login'/>;
    default:
      return null;
  }
};



  return (
   <div className='md:mx-5'>
     <CardWrapper>
      <BasicInfoHeader title='Phone Number Verification' description='Verify & Edit your personal number for protection.' buttonColor='yellow'  buttonText='Edit' onClick={onOpenModal}/>
     
   <div className='grid'>
   <div className='flex justify-between items-center pt-5 md:pt-0 w-[100%] pb-2.5'>
        <div className='w-full md:w-1/2 '>
            <div className='flex justify-between md:justify-start mb-[10px] md:mb-[20px] items-center'>
              <div className='font12RB text-white   px-1 md:hidden flex '>Phone number</div>
              <div className='md:hidden flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
            </div>
            <div className='  items-center w-[100%] gap-[8px] grid'>
            <div className='font12RB text-white   px-1 md:flex hidden '>Phone number</div>
                <PhoneWithCountryCode
                  value={phone}
                  onChange={(e) => {
                    setPhoneCode(e?.phoneCode)
                    setPhone(e?.value)
                  }}
                  placeholder='81*** ***88'
                />
              </div>
            </div>
            <div className='hidden md:flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
          </div>

          <div className='grid'>
            <p className='text-GRAY_101 font14SN'>Added: April 4, 2021</p>
          </div>
        </div>

        <div className='w-full'>
        <Modal isOpen={isModalOpen} onClose={handleClose} modalClass="security-modal-screen">
        {renderModalContent()}
          </Modal>
        </div>
      </CardWrapper>
    </div>
  )
}

export default ManagePhoneNo;