import { CardProps } from '@mui/material'
import Image from 'next/image'
import React from 'react';
function CardComponent({upi,email,name,logo,accNo,cvv,cvvNo, cvvBg ,expiry,background,border}:CardProps) {
 
  return (
    <div className={`${background ? 'bg-BLACK_304 px-2.5  md:px-5' : 'px-0  md:px-0'} flex gap-5 w-full  py-5 rounded-[10px] `}>
      <div className='bg-BLACK_306 w-[48px] h-[40px] md:w-[78px] md:h-[60px] rounded-[5px] md:rounded-[13px] flex items-center place-content-center'>
      <div className=' flex items-center place-content-center '>
       {
        logo && logo?.includes('master') ?
         <Image src='/assets/images/masterCard.png' alt='MasterCard Logo' width={27} height={27} className='md:w-[40px] md:h-[40px]'/> :
        logo && logo?.includes('visa') ?
         <Image src='/assets/images/visa2.png' alt='Visa Logo' width={27} height={27} className='md:w-[40px] md:h-[40px]'/> :
        logo && logo?.includes('upi') ?
         <Image src='/assets/icons/upi.svg' alt='UPI Logo' width={16} height={24} className='md:w-[22px] md:h-[32px]'/> :
         <Image src='' alt='Net Banking Logo' width={27} height={27} className='md:w-[40px] md:h-[40px]'/>
      }
       </div>
      </div>

      <div className='flex justify-between md:justify-normal items-center w-full gap-2 md:gap-5 '>
      <div className='text-start grid text-[10px] md:text-[12px] font-[400] text-GRAY_101 md:mr-5'>
          <p className='text-white text-[13px] sm:text-[14px] md:text-[16px] font-[500]'>{name}</p>
         {upi ?
          <p className='my-0'>{email}</p>
          : 
        <div>
         {accNo &&  <p>Account Number : *****{accNo?.slice(-5,-1)}</p>}
          <p className='mt-[0px]'>EX : {expiry} </p> 
        </div>
          }
      </div>
     {(upi === true || cvv === false) ?
     null
     : 
     <div className={`w-[66px] md:w-[75px] h-[44px] pt-4 px-2.5  text-GRAY_101 ${cvvBg ? ' bg-BLACK_304' : ""} text-[10px] font-[400]  text-center rounded-[10px]`}>
     <p>CVV/CVV</p>
   </div>
   }
      </div>
    </div>
  )
}

export default CardComponent;