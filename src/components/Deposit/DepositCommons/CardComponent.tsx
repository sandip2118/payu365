import { CardProps } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function CardComponent({upi,email,name,logo,accNo,cvv,cvvNo, cvvBg ,expiry,background,border}:CardProps) {
  return (
    <div className={`${background ? 'bg-BLACK_304' : ''} flex gap-5 w-full px-2.5  md:px-5 py-5 rounded-[10px]`}>
       <div className='w-[40px] md:w-[60px] h-[40px] md:h-[40px] bg-BLACK_306 rounded-[13px] flex items-center place-content-center'>
         <Image  src={logo} alt='' width={27} height={27} className='md:w-[40px] md:h-[40px]'/>
       </div>

      <div className='flex justify-between md:justify-normal items-center w-full gap-2 md:gap-5 '>
      <div className='text-start grid  text-[10px] md:text-[12px] font-[400]  text-GRAY_101 md:mr-5 gap-[3px]'>
          <p className='text-white text-[13px] sm:text-[14px] md:text-[16px] font-[500]'>{name}</p>
         {upi ?
          <p>Mjetani@okicic</p>
          : 
        <>
          <p>Account Number : *****{accNo}</p>
          <p>EX : {expiry} </p> 
        </>
          }
      </div>
      <div className={`w-[66px] md:w-[75px] h-[44px] pt-4 px-2.5  text-GRAY_101 ${cvvBg ? ' bg-BLACK_304' : ""} text-[10px] font-[400]  text-center rounded-[10px]`}>
        <p>CVV/CVV</p>
      </div>
      </div>
    </div>
  )
}

export default CardComponent