import CardWrapper from "../SettingsCommons/CardWrapper"
import EmailVerification from "./EmailVerification"
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import UpdateEmail from "./Modals/UpdateEmail";
import Successful from "./Modals/Successful";
import EnterOtpEmail from "./Modals/EnterOtpEmail";

function ManageEmail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal =()=>{
    console.log('onOpenModal');
    setIsModalOpen(true)
  };

  const handleClose = () => {
  console.log('should close');
  setIsModalOpen(!isModalOpen); 
};

const ModalStage = {
  EnterOTPEmail: 'EnterOTPEmail',
  UpdateEmail: 'UpdateEmail',
  Successful: 'Successful'
};
const [currentModalStage, setCurrentModalStage] = useState(ModalStage.EnterOTPEmail);
const goToUpdateEmail = () => setCurrentModalStage(ModalStage.UpdateEmail);
const goToSuccessful = () => setCurrentModalStage(ModalStage.Successful);


const renderModalContent = () => {
  switch (currentModalStage) {
    case ModalStage.EnterOTPEmail:
      return <EnterOtpEmail onContinue={goToUpdateEmail} />;

      case ModalStage.UpdateEmail:
        return <UpdateEmail onContinue={goToSuccessful} />;
    case ModalStage.Successful:
      return <Successful title='Successfully Updated Email Address' description='Make sure you are up-to date with '  route='settings' buttonText="Back To Settings"/>;
    default:
      return null;
  }
};



  return (
   <div className="">
    <div className="md:mx-5 mb-[100px]">
    <CardWrapper>
  <EmailVerification  title="Email Verification (Unverified)" description="Email verification adds another layer of security to your withdrawals and Binance account." buttonColor="grey" buttonText="Verify Email" borderColor="grey" buttonIcon='/assets/icons/exclamation.svg' />
     
  </CardWrapper>

 <div className="flex gap-5 w-full items-center">
 <div className="my-5 border-[1px] border-BLACK_306 w-full"></div>
  <p className="font11RB text-GRAY_101">or</p>
  <div className="my-5 border-[1px] border-BLACK_306 w-full"></div>
 </div>

  <CardWrapper>
  <EmailVerification  title="Email Verification (Verified)" description="Email verification adds another layer of security to your withdrawals and Binance account." buttonColor="green" buttonText="Verified" borderColor="green"  lastDate="Added: April 4, 2021" onClick={onOpenModal}/>

  <div className='w-full'>
        <Modal isOpen={isModalOpen} onClose={handleClose} modalClass="security-modal-screen">
      {renderModalContent()}
          </Modal>
        </div>
    </CardWrapper>
    </div>
    </div>
  )
}

export default ManageEmail;