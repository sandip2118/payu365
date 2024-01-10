import React from 'react';
import { InputTypeProps } from './type';


const InputField: React.FC<InputTypeProps> = ({ type = 'text', placeholder, value, onChange, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className='w-full font14R bg-BLACK_304 no-input-arrow rounded-[5px] px-5 h-[48px] placeholder-GRAY_101 focus:text-white text-white focus:outline-none focus:border-none'
    />
  );
};

export default InputField;
