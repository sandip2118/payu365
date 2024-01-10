import React from 'react'

function PermanentlyDeactivate() {
  return (
    <div className='bg-[#1C1C24] w-100% px-4 md:rounded-[5px]'>
        <div className='grid md:flex justify-between items-center py-[20px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px] mb-[20px]'>
    <div className='grid text-start gap-[10px]'>
      <div className=' font-[500] text-[18px] md:text-[20px] text-white'>Permanently Remove Account</div>
      <div className='font14SN text-GRAY_101'>If you have made your decision anyway!</div>
    </div>
    <div>
      <button className='font14RB text-white bg-[#FA6C4C] rounded-[5px] w-[184px] h-[40px]'>Permanently Remove</button>
    </div>
  </div>
    </div>
  )
}

export default PermanentlyDeactivate