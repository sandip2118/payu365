import Image from 'next/image'
import React from 'react'
import { RefferalProps } from '../types';


const ReferralComponent:React.FC<RefferalProps> =({title,description,referralData,onClick}) =>{
  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralData)
      .then(() => {
        console.log("Referral data copied to clipboard!",referralData);
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
      });

    if (onClick) {
      onClick(); 
    }
  };

  return (
    <div className=' grid md:flex md:justify-between items-center py-[20px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px]'>
      <div className='md:w-2/3 w-full grid gap-[10px]'>
          <p className='font14RB text-white'>{title}</p>
          <p className='text-GRAY_101 font12R'>{description}</p>
        </div>
        <div className='flex justify-between w-full md:w-2/3 '>
          <div className='w-1/2 flex justify-start items-center gap-[8px] font12RB text-white'>
            <div><Image  src='/assets/icons/referralId.svg' alt='img' width={15} height={15}/></div>
            <p className='referral-text'>{referralData}</p>
          </div>
          <div className='w-1/3 flex justify-end '>
          <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[96px] h-[28px] flex justify-center gap-[10px] items-center'>
          <Image  src='/assets/icons/copyIcon.svg' alt='img' width={15} height={15}/>
            <p onClick={handleCopyClick}>Copy</p>
          </button>
          </div>
        </div>
      </div>
  )
}

export default ReferralComponent