import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { SettingsSideBarProps, settingsTabItem } from '../types';
import { settingsTabs } from '../SettingsTabs';
import Icons from '../../../assets/icon';
import { colors } from '../../../themes';
import { AppContext } from '@/context/AppProvider';
import { useRouter } from 'next/router';


function MobileMenuBar({ activeTab, setActiveTab }: SettingsSideBarProps) {
  const router = useRouter();

  const handleMenuClick = (tab: settingsTabItem) => {
    setActiveTab(tab);
    router.push('/settings');
  };

  const getIconSrc = (iconName: string, tabId: number) => {
    return activeTab.itemId === tabId ? `/assets/icons/${iconName}-mob.svg` : `/assets/icons/${iconName}-inactive.svg`;
  };

  const isActive = (tab: string) => {
    return ( activeTab.itemId === tab )?
      'bg-BLUE_201 text-white border-BLUE_201 rounded-[8px] text-white font13SB' : 
      'text-white'; 
  };

  const context = useContext(AppContext);

  return (
   
     <div className={` ${!context.mobileMenuOpen ? 'md:block hidden' : 'block md:hidden'} pt-5 bg-[#1C1C24] w-[75%] md:hidden grid cursor-pointer right-0 px-2.5 absolute h-[89vh] border-r border-[#292932] z-50`}>
    <div className='h-[80svh] overflow-y-auto'>
      {settingsTabs.map((tab) => (
        <div 
        key={tab.itemId} 
        className={`flex gap-[15px] my-[10px] h-[38px] items-center px-[10px] mx-[10px] lg:mx-[13px] text-[13px] ${isActive(tab.itemId)}`} 
        onClick={() => handleMenuClick(tab)}>
          <Image src={getIconSrc(tab.icon, tab.itemId)} width={17} height={17} alt='img' style={{ marginLeft: activeTab.itemId === tab.itemId ? '0px' : '0' }}/>
          
              <p className={tab.title === 'Deactivate A/C' ? 'text-[#FA6C4C] font13SB' : (activeTab.itemId === tab.itemId ? 'text-white' : 'text-GRAY_101 font13SB')}>{tab.title}</p>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default MobileMenuBar;