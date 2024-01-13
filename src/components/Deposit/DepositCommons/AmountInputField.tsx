import React, { useState } from 'react'
import { AmountInputProps } from '../types';

function AmountInputField({width}:AmountInputProps) {
  const [amount,setAmount] = useState <string>('')
  return (
    <div className={`bg-BLACK_304 w-[${width}] flex place-content-center items-center h-[47px] rounded-[10px] my-5`}>
     <div className='h-[15px] flex items-center justify-between'>
     <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)} className='bg-BLACK_304 w-[60px] h-[15px] focus:border-none focus:outline-none font12400 flex text-end px-1'/>
      <div className='border-l border-GRAY_101 text-GRAY_101 h-[15px]'>
        <p className='pl-2.5 text-start font12400'>INR</p>
      </div>
     </div>
    </div>
  )
}

export default AmountInputField;