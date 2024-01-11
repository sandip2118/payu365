import { EnterOTP } from './../components/Login/EnterOTP'
import { Modal } from "./../components/Modal/Modal";
import { useState } from "react";

const Verify = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccessOpenModal = () => {
    setIsSuccessModalOpen(true);
    setIsModalOpen(false);
  };

  const handleSuccessCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className=" w-full h-screen bg-[#13131A]"
      style={{
        backgroundImage: "url(/assets/images/verifybg.png)",
        backgroundSize: "cover",
      }}

    >
      <button onClick={handleOpenModal}>check modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalClass="md:bg-[#1C1C24] flex flex-col justify-center items-center  md:shadow-[0px_30px_60px_0px_rgba(1,2,9,0.20),0px_16px_30px_0px_rgba(33,25,25,0.17)] px-5 py-8 md:px-[76px] md:py-[60px] rounded-[10px]"
      >
        <p className="text-center text-white text-2xl font-bold">
          Enter OTP for Verification
        </p>
        <p className="text-sm font-medium text-center text-[#777E90] mt-[20px]">
          We have sent to 4 digit code on <br /> your given phone number
          <br />
          <span className="text-white">+91 *********9</span>
        </p>
        <div className='sm:mt-[50.5px] mt-[40.5px]'>
        <EnterOTP />
       </div>
        <button onClick={handleSuccessOpenModal} className="bg-BLUE_201 text-white font-[500] flex w-full justify-center items-center gap-2.5 pt-[15px] pb-4 rounded-[5px] mt-[20px]">
          Verify OTP
        </button>
        <p className="text-[#777E90] text-xs text-center mt-[20px]">
          Didn’t receive code? <span className="text-BLUE_201">Resend</span>
        </p>
        <p className="w-full text-center text-base  mt-[30px] text-[#F59C26] cursor-pointer">
          Back to Sign In
        </p>
      </Modal>
      <Modal isOpen={isSuccessModalOpen}
        onClose={handleSuccessCloseModal}
        modalClass=" w-[90%] md:w-[45%] md:bg-[#1C1C24] flex flex-col justify-center items-center  md:shadow-[0px_30px_60px_0px_rgba(1,2,9,0.20),0px_16px_30px_0px_rgba(33,25,25,0.17)] px-5 py-8 md:px-[110px] md:py-[75px] rounded-[10px]">
        <img src="/assets/images/success.svg" className="w-[108px] h-[97px]" />
        <p className="w-full text-center text-white text-[22px] self-stretch">Congratulations, your mobile number has been successfully verified.</p>
        <button
          className="bg-BLUE_201 text-xs text-white font-[500] flex  justify-center items-center gap-2.5 pt-[15px] pb-4 px-[100px] rounded-[5px] mt-[20px]">
          Get Started
        </button>
      </Modal>
    </div>
  );
};

export default Verify;
