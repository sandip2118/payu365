import React from 'react'

function HeaderWithButton() {
  return (
    <div className='flex justify-between items-center py-[20px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px]'>
    <div className='grid text-start gap-[10px]'>
      <div className=' font-[500] text-[18px] md:text-[20px] text-white'>{title}</div>
      <div className='font13RB md:font14SN text-GRAY_101'>{description}</div>
    </div>
    <div>
      <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]'>{buttonText}</button>
    </div>
  </div>
  )
}

export default HeaderWithButton