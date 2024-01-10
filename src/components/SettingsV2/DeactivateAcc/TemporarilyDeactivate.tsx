import React, { useState } from 'react';
import InputField from '@/components/Common/InputField';     


function TemporarilyDeactivate() {
  const [deactivateInput,setDeactivateInput] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  
  return (
    <div className='bg-[#1C1C24] w-100% px-4 md:rounded-[5px] gap-[20px]'>

     <div className='grid md:flex justify-between items-center py-[20px] border-b-[1px] border-[#44444F] my-[20px] md:gap-[0px] gap-[20px]'>

    <div className='grid text-start gap-[10px]'>
      <div className=' font-[500] text-[18px] md:text-[20px] text-white'>Deactivate Your Account</div>
      <div className='font14SN text-GRAY_101'>Your data & money will remain save & froze but use of account will be disable.</div>
    </div>

    <div className='flex gap-[20px]'>
      <button className='font14RB text-[#FA6C4C] bg-[#44444F] rounded-[5px] w-[174px] h-[40px]'>Deactivate Account</button>
      <button className='font14RB text-[white] bg-[#267FF5] rounded-[5px] w-[88px] h-[40px]'>Cancel</button>
    </div>

    </div>

    <div className='grid md:flex md:justify-between gap-[25px] mb-[20px]'>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1'>To confirm this, type “DEACTIVATE”</label>
            <InputField 
        type="text" 
        placeholder="DEACTIVATE" 
        onChange={(e) => setDeactivateInput(e.target.value)} 
        value={deactivateInput} 
      />
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1 '>Password</label>
            <InputField 
        type="text" 
        placeholder="*******************" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
          </div>
        </div>
  
      </div>
  )
}

export default TemporarilyDeactivate