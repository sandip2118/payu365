import React, { useState } from 'react';
import Image from 'next/image';
import { PasswordInputProps } from './type';



const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, value, onChange,border}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const EyeIcon = '/assets/icons/hide.svg';
  const EyeOffIcon = '/assets/icons/show.svg';

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full font14R bg-BLACK_304 rounded-[5px] pl-5 h-[48px] placeholder-GRAY_101 ${showPassword ? 'input-placeholder ': 'input-placeholder-hide'} ${border ? 'border-[1px] border-GREEN_02': 'border-none'} focus:outline-none focus:border-none`}
      />
      <div 
        className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        <Image 
          src={showPassword ? EyeOffIcon : EyeIcon}
          alt="Toggle Password Visibility"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
