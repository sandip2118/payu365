import { settingsTabs } from './SettingsTabs';
import Image from 'next/image';
import { SettingsSideBarProps, settingsTabItem } from './types';


function SettingsSideBar({ activeTab, setActiveTab }: SettingsSideBarProps) {
  const handleMenuClick = (tab: settingsTabItem) => {
    setActiveTab(tab);
  };

  const getIconSrc = (iconName: string, tabId: number) => {
    return activeTab.itemId === tabId ? `/assets/icons/${iconName}-active.svg` : `/assets/icons/${iconName}-inactive.svg`;
  };

  const isActive = (tab) => {
    if (activeTab.itemId === tab.itemId) {
      if (tab.title === 'Deactivate A/C') {
        return 'bg-[#FA6C4C14] border-l-[3px] border-[#FA6C4C] lg:py-2';
      } else {
        return 'bg-[#267FF514] border-l-[3px] border-[#267FF5] text-[#267FF5] lg:py-2';
      }
    } else {
      return 'text-GRAY_101';
    }
  };
  
 
  return (
    <div className=' bg-[#1C1C24] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] hidden lg:grid cursor-pointer'>
      <div className='h-[80svh] overflow-y-auto'>
        {settingsTabs.map((tab) => (
          <div 
          key={tab.itemId} 
          className={`flex gap-[15px] my-[10px] h-[38px] items-center px-[10px] mx-[10px] lg:mx-[13px] ${isActive(tab)}`} 
          onClick={() => handleMenuClick(tab)}>
            <Image src={getIconSrc(tab.icon, tab.itemId)} width={17} height={17} alt='img' style={{ marginLeft: activeTab.itemId === tab.itemId ? '-3px' : '0' }}/>
            {(tab.title === 'Deactivate A/C') 
            ? 
            <p className={tab.title === 'Deactivate A/C' ? 'text-[#FA6C4C] font13SB' : 'text-GRAY_101 font13SB'}>{tab.title}</p>
            :
            <p className={`${activeTab.itemId ===tab.itemId ? 'text-[#267FF5]' : 'text-GRAY_101 '} font13SB`}>{tab.title}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsSideBar;

