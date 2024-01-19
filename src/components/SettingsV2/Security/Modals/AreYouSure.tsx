import Image from 'next/image'
import React from 'react'

function AreYouSure({onContinue}) {
  return (
    <div className='p-5 sm:p-[30px]'>
      <div className='flex justify-center'>
        <Image  src='/assets/icons/sure.svg' width={50} height={50} alt='img' className='sm:w-[65px] sm:h-[65px]'/>
      </div>

      <div className='mt-5'>
        <p className='font-[700]  text-[18px] sm:text-[24px] text-white text-center'>Are You Sure You Want to Change Your Phone Number?</p>
      </div>

      <div className=' mt-4 sm:mt-5  mx-auto'>
       <ol className='text-start text-GRAY_101 px-4 sm:px-10 font12RB grid gap-2.5'  style={{listStyleType:"disc"}}>
        <li>Withdrawals and P2P transactions will be disabled for 24 hours after removing your phone number verification to ensure the safety of your assets.</li>
        <li>Two security verification methods are required for withdrawals and other actions. Using only one verification method will put your account at greater risk.</li>
       </ol>
      </div>

      <div className='flex justify-center  gap-5 mt-5 sm:mt-[30px]'>
        <button className='bg-BLACK_306 text-white w-[100px] h-[40px] rounded-[5px] font14SB' >Cancel</button>
        <button className='bg-BLUE_201 text-white w-[100px] h-[40px] rounded-[5px] font14SB' onClick={onContinue}>Continue</button>
      </div>

      <div className='mt-[15px] w-[80%] sm:w-[65%] mx-auto'>
        <p className= ' text-center text-RED_01 font12RB'>Please link & verify your email address before updating phone number verification.</p>
      </div>
    </div>
  )
}

export default AreYouSure