import React from 'react';
import { BasicInfoHeaderProps } from '../types';


const BasicInfoHeader: React.FC<BasicInfoHeaderProps> = ({ title, description,buttonText,buttonColor,onClick }) => {
  return (
    <div className='flex justify-between items-center py-[20px] border-b-[1px] border-[#44444F] gap-[17px] xs:gap-[30px] md:gap-[0px]'>
    <div className='grid text-start gap-[10px]'>
      <div className=' font-[500] text-[16px] md:text-[20px] text-white'>{title}</div>
      <div className='font-[400] md:font-[500] md:text-[14px] text-[13px] text-GRAY_101'>{description}</div>
    </div>
    <div>
      <button onClick={onClick} className={`font12RB text-[#B1B5C3] rounded-[5px] ${(buttonText === 'Edit') ? 'w-[75px]' : 'w-[87px]'} h-[28px] ${(buttonColor === 'grey') ? 'bg-BLACK_305 ' : 'bg-YELLOW_02 text-white '}`}>{buttonText}</button>
    </div>
  </div>
  )
}

export default BasicInfoHeader;