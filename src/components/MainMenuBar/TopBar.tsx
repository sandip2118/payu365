import Image from 'next/image'
import React from 'react';
import { TabItem } from './Tabs';


interface TopBarProps {
  activePage: TabItem;
}


const TopBar: React.FC<TopBarProps> = ({ activePage }) => {

  return (
   <div className='grid'>
     <div className='hidden md:flex w-screen bg-[#1C1C24] text-white  items-center '>
      <div className='w-[20%] lg:w-[15%] h-70px flex place-content-center'><Image src='/assets/images/logo.png' alt='logo' width={160} height={48}/></div>
      <div className='w-[85%] flex justify-between px-[21px] items-center border-b border-[#292932] h-[70px] border-l'>
        <div className='w-[50%] text-[22px] font-[600]'>{activePage.title}</div>
       <div className=' md:w-[50%] lg:w-[40%]  xl:w-[30%] gap-[20px] flex justify-end items-center pr-4 '>
       <div className='flex gap-2 items-center'><p className='text-[#777E90] text-[14px]'>Language:</p> <div className='bg-[#292932] w-[137px] h-[30px] text-white flex justify-between items-center px-2 py-1 rounded-[8px]'><p className='text-[14px]'>English</p><Image  alt='' src='/assets/icons/caret-active.svg' width={17} height={8}/></div></div>
          <div><Image  alt='img' src='/assets/images/notification.png' width={30} height={30}/></div>
          <div><Image  alt='img' src='/assets/images/profile.png' width={30} height={30} className='rounded-full'/></div>
       </div>
      </div>
    </div>

    <div  className='flex md:hidden w-screen bg-[#1C1C24] text-white h-[60px] items-center justify-between px-4'>
      <div>
      <Image src='/assets/icons/hamburger.svg' alt='logo' width={20} height={28}/>
      </div>
      <div>
      <Image src='/assets/images/logo.png' alt='logo' width={128} height={28}/>
      </div>
    <div>
    <Image  alt='icons' src='/assets/icons/profile.svg' width={20} height={20}/>
    </div>

    </div>
   </div>

  )
}

export default TopBar