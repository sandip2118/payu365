import React, { useState } from 'react';
import SettingsSideBar from './SettingsSideBar';
import SettingsContent from './SettingsContent';
import { settingsTabs } from './SettingsTabs';
import Header from '../Header';
import { settingsTabItem } from './types';
import MobileMenuBar from './SettingsCommons/MobileMenuBar';

function Wrapper() {
  const [activeTab, setActiveTab] = useState<settingsTabItem>(settingsTabs[0]);

  return (
  <>
   <Header title="Settings" activeTab={activeTab} setActiveTab={setActiveTab}  />
   <div className='grid md:flex bg-[#13131A] md:w-full w-screen min-h-screen  '>
   <SettingsSideBar  activeTab={activeTab} setActiveTab={setActiveTab} />
   <MobileMenuBar   activeTab={activeTab} setActiveTab={setActiveTab}/>
   <SettingsContent activeTab={activeTab} />
 </div>
 </>
  );
}

export default Wrapper;
