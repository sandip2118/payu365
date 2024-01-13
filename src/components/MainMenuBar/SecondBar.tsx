import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { tabs, TabItem } from './Tabs';
import { useRouter } from 'next/router';

interface SecondBarProps {
  setActivePage: React.Dispatch<React.SetStateAction<TabItem>>;
  activePage: TabItem;
}


const SecondBar: React.FC<SecondBarProps> = ({ setActivePage, activePage }) => {
  const router = useRouter()
  const [activeItemId, setActiveItemId] = useState<number>(activePage.itemId);

  const handleMenuClick = (itemId: number, itemPath: string) => () => {
    setActiveItemId(itemId);
    router.push(`/${itemPath}`)
    const newActiveTab = tabs.find(tab => tab.itemId === itemId);

    if (newActiveTab) {
      setActivePage(newActiveTab);
    }
  };

  useEffect(() => {
    setActiveItemId(activePage.itemId);
  }, [activePage]);


  const isActive = (itemId: number) => {
    return itemId === activeItemId ?
      'bg-[#267FF5] text-[#267FF5] rounded-[8px] text-white lg:py-2' : // Active styles
      'text-[#777E90]'; // Inactive styles
  };

  const getIconSrc = (iconName: string, itemId: number) => {
    return activeItemId === itemId ? `/assets/icons/${iconName}-active.svg` : `/assets/icons/${iconName}-inactive.svg`;
  };
  return (
    <div className='grid md:flex'>
      {/* Mobile Phone */}
      <div className='flex md:hidden w-screen   h-[58px] '>
        <div className='flex gap-[10px] items-center px-4'>
          <Image alt='img' src='/assets/icons/home.svg' width={24} height={24} />
          <Image alt='img' src='/assets/icons/sideCaret.svg' width={8} height={4} />
          <p className='text-white text-[14px] font-[600px]'>{activePage.title}</p>
          <Image alt='img' src='/assets/icons/sideCaret.svg' width={8} height={4} />
          <p className='text-[#777E90] text-[14px] font-[600]'>Basic information</p>
        </div>


      </div>

      <div className=' hidden md:grid  w-[20%] lg:w-[15%] bg-BLACK_301 border-r border-[#292932] lg:px-[12px] px-[8px] h-[90vh]'>


        <ul className='relative font-[600]'>
          {tabs.map((item) => (
            <li onClick={handleMenuClick(item.itemId, item.path)}>
              {(item.extraIcon === '' ?
                <div className={`flex gap-[15px] lg:gap-[18px]  items-center py-2 my-4 lg:px-4 md:px-2 ${isActive(item.itemId)} mt-4`}>
                  <>
                    <Image alt='icons' src={getIconSrc(item.icon, item.itemId)} width={20} height={20} />
                    <p className='text-[13px]'>{item.title}</p>
                  </>
                </div> :
                <div className={`flex  items-center justify-between py-2 my-4 lg:px-4 md:px-2 ${isActive(6)}`}>
                  <div className='flex gap-[15px] lg:gap-[18px]  items-center'>
                    <Image alt='icons' src={getIconSrc('transfer', 6)} width={20} height={20} />
                    <p className='text-[13px]'>Transfer</p>
                  </div>
                  <Image alt='icons' src={getIconSrc('caret', 6)} width={17} height={17} />
                </div>
              )}
            </li>
          ))}
          <li onClick={handleMenuClick(10, '/')} className='absolute bottom-0 w-full'>
            <div className={`flex gap-[15px] lg:gap-[18px]  items-center py-2 my-4 lg:px-4 md:px-2 ${isActive(10)}`}>
              <Image alt='icons' src='/assets/icons/logout.svg' width={20} height={20} />
              <p className='text-[#FA6C4C] text-[13px]'>Logout</p>
            </div>
          </li>
        </ul>
      </div>
      {/* Pass In Components */}
      <div className=' w-[80%] lg:w-[85%] text-white'>
        Component
      </div>
    </div>
  )
}

export default SecondBar