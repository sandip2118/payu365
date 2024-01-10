import React from 'react';
import { HeaderProps } from '../types';



const Header: React.FC<HeaderProps> = ({ title, description,isBorder }) => {
  return (
    <div className={`flex justify-between items-center pb-[20px] gap-[17px] md:gap-[0px] py-[20px] ${isBorder ? 'border-b-[1px] border-[#44444F]' : ''}`}>
    <div className='grid text-start gap-[10px]'>
          <div className=' font-[500] text-[16px] md:text-[20px] text-white'>{title}</div>
          <div className='font-[500] text-[14px] md:text-[12px] text-GRAY_101'>{description}</div>
        </div>
    </div>
  )
}

export default Header;
