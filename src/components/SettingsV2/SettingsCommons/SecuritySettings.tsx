import Image from 'next/image'
import React from 'react'
import { SecuritySettingsProps } from '../types';


const SecuritySettings:React.FC<SecuritySettingsProps>=({tag,icon,iconPath,title,description,extra,extraText,switch:isSwitchOn,switchIcon,switchText,buttonText ,isBorder,})=> {

  return (
    <div className={`grid lg:flex gap-[10px] md:gap-[0px] py-5 ${isBorder ? 'border-b-[1px] border-[#44444F]': ''}`}>
      <div className='w-full lg:w-1/2 grid gap-[10px] lg:pr-[60px] md:pr-[40px]'>
        <div className='flex gap-2.5 items-center '>
           {icon ?    <Image src={iconPath} alt='google' width={24} height={24} /> :null}
              <p className='font14SB  text-white'> {title}</p>
           {tag ? <div><p className='text-[#F59D31] font-[500] text-[12px] sm:text-[14px] px-[10px] sm:px-[15px] py-[5px] border border-[#F59D31] rounded-[40px]'>Recommended</p></div> : null}
        </div>
        <div><p className='text-GRAY_101 font12R'>{description}</p></div>
       {extra ?  <div><p className='font12SMB text-[#F59D31] underline'>{extraText}</p></div> :null}
      </div>

      <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0 '>
    {  isSwitchOn ? (
        <div className='flex justify-start gap-[10px]'>
          {switchIcon 
            ? <Image src='/assets/icons/checked.svg' alt='Checked' width={15} height={15} />
            : <Image src='/assets/icons/notChecked.svg' alt='Not Checked' width={15} height={15} />
          }
          <p className='font12RB text-white'>{switchText}</p>
        </div>
     
    ) : null
   }
    <div className='flex justify-end'>
          <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' >{buttonText}</button>
        </div>
    </div>
    </div>
  )
}

export default SecuritySettings