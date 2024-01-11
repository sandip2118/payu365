import React from 'react';
import { InputTypeProps } from './type';


const InputField = ({ type = 'text', placeholder, value, onChange, disabled }:InputTypeProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className='w-full  text-[13px] md:text-[14px] font-[400] bg-BLACK_304 no-input-arrow rounded-[5px] px-5 h-[48px] placeholder-GRAY_101 focus:text-white text-white focus:outline-none focus:border-none'
    />
  );
};

export default InputField;
