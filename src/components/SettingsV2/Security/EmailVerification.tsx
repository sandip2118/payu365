import React, { useState } from 'react'
import { EmailVerificationProps } from '../types'
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader';
import Image from 'next/image'
import InputField from '../../Common/InputField'

const EmailVerification:React.FC<EmailVerificationProps> =({title,description,lastDate,buttonColor,borderColor,buttonIcon,buttonText})=> {
  const [email, setEmail] = useState<string | undefined>('');

  return (
    <div>
    <BasicInfoHeader title={title} description={description} buttonColor={buttonColor} buttonText='Edit' />
    <div className='grid'>
   <div className='flex justify-between items-center pt-5 w-[100%] pb-2.5  gap-5 md:gap-0'>
        <div className='w-full md:w-1/2 '>
            <div className='flex justify-between md:justify-start mb-[10px] md:mb-[20px] items-center'>
              <div className='font12RB text-white   px-1 flex '>Email Address</div>
              <div className='md:hidden flex'>
                <button className={`font14SB rounded-[40px] flex items-center border place-content-center ${buttonIcon ? 'w-[max-content] px-[15px]' : 'w-[87px]'} h-[28px] ${(borderColor === 'green') ? 'border-GREEN_02 text-GREEN_02' :' border-GRAY_101 text-GRAY_101' }`}>
               {buttonIcon ?
               <Image src={buttonIcon} alt='img' width={16} height={16} className='mr-2.5'/> 
               :
                null
               }
                {buttonText}
                </button>
                </div>
            </div>
            <div className='  items-center w-full md:w-[370px] gap-[8px]  flex'>
              <InputField type='text' placeholder='mituljetani@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
        </div>
       <div className='hidden md:flex'>
        <button className={`font14SB rounded-[40px]  border flex items-center place-content-center  ${buttonIcon ? 'w-[max-content] px-[15px]' : 'w-[87px]'} h-[28px] ${(borderColor === 'green') ? 'border-GREEN_02 text-GREEN_02' :' border-GRAY_101 text-GRAY_101' }`}>
        {buttonIcon ?
               <Image src={buttonIcon} alt='img' width={16} height={16} className='mr-2.5'/> 
               :
                null
               }
          {buttonText}
        </button>
        </div>
    </div>

 {lastDate ? 
    <div className='grid'>
    <p className='text-GRAY_101 font14SN'>{lastDate}</p>
  </div>
  :
  null
 }
    </div>
    </div>
  )
}

export default EmailVerification