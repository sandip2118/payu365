import Image from 'next/image'
import React from 'react'

function DeactivateAlert() {
  return (
    <div className='bg-[#F59D3133] w-100% px-4 rounded-[5px] py-[22px] grid gap-[10px]'>
    <div className='flex gap-[10px] '>
      <Image  src='/assets/icons/deactivateAlert.svg' alt='alert' width={24} height={24} className='w-[24px] h-[24px]'/>
      <p className='font20SMinB text-white'><span className='text-[#F59D31]'>Are you sure</span> you want to <span className='text-[#FA6C4C]'>Temporarily Deactivate</span> your account ?</p>
    </div>
    <div>
      <p className='font14SN  text-GRAY_101'>Once you will deactivate the account, Still your data will be keep with us securely in our system.</p>
    </div>
    </div>
  )
}

export default DeactivateAlert