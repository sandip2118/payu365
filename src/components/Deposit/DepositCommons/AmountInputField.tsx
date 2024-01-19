import React, { useEffect, useRef, useState } from 'react'
import { AmountInputProps } from '../types';

function AmountInputField({width}:AmountInputProps) {
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const minWidth = 5; 
  const padding = 0; 

  useEffect(() => {
    const calculateWidth = () => {
      const context = document.createElement('canvas').getContext('2d');
      context.font = '14px Arial'; 
      return context.measureText(`${amount}`).width + padding;
    };

    if (inputRef.current) {
      const newWidth = Math.max(minWidth, calculateWidth());
      inputRef.current.style.width = `${newWidth}px`;
    }
  }, [amount]);

  

  return (
    <div className={`bg-BLACK_304 w-[${width}] flex place-content-center items-center h-[47px] rounded-[10px]`}>
     <div className='h-[15px] w-[50%] md:w-[30%] flex justify-center'>
      <div className="flex items-center bg-BLACK_304">
      <span className="">₹</span>
      <input
        type='text'
        ref={inputRef}
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        className='h-[15px] focus:border-none focus:outline-none font12400 text-end bg-BLACK_304 mr-1 ml-[-2px]'
        style={{ minWidth: `${minWidth}px` }}
      />
    </div>
      <div className='border-l border-GRAY_101 text-GRAY_101'>
      <p className='pl-2.5 text-start font12400'>INR</p>
      </div>
     </div>
    </div>
  )
}

export default AmountInputField;