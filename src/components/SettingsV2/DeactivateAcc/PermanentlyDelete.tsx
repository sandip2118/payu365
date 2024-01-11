import Image from 'next/image'
import React from 'react'

function PermanentlyDelete() {
  return (
    <div className='grid gap-2.5'>
      <div className='flex items-center gap-[10px]'>
      <Image  src='/assets/icons/exclamation.svg' alt='img' width={24} height={24} className='md:w-[24px] h-[24px]'/>
      <p className='text-YELLOW_01 font20SN text-left'>Are you sure <span className='text-white'>you want to</span><span className='text-RED_01'>Permanently Remove</span> <span className='text-white'>your account ?</span></p>
      </div>
        <p className='text-GRAY_101 font14SN'>Once you will remove the account, Our team will not able to recover your account and your data will be erase forever from our database.<br></br>If you still want to remove your account, Kindly Contact to our Administrator on <span className='text-white  '>admin@payu365.com</span></p>
      
    </div>
  )
}

export default PermanentlyDelete