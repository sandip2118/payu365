import Header from '@/components/Header';
import ManageEmail from '@/components/SettingsV2/Security/ManageEmail';
import MobileMenuBar from '@/components/SettingsV2/SettingsCommons/MobileMenuBar';
import Securitybreadcrumbs from '@/components/SettingsV2/SettingsCommons/Securitybreadcrumbs';
import SettingsSideBar from '@/components/SettingsV2/SettingsSideBar';
import { settingsTabs } from '@/components/SettingsV2/SettingsTabs';
import { settingsTabItem } from '@/components/SettingsV2/types';
import React, { useState } from 'react'

function Index() {
  const [activeTab, setActiveTab] = useState<settingsTabItem>(settingsTabs[3]);
    const title = activeTab.title;
  return (
    <div>
    <Header title="Settings" />
    <div className='grid md:flex bg-[#13131A] md:w-full w-screen min-h-screen  '>
    <SettingsSideBar  activeTab={activeTab} setActiveTab={setActiveTab} />
    <MobileMenuBar   activeTab={activeTab} setActiveTab={setActiveTab}/>
    <div className='w-11/12 sm:w-10/12 mx-auto  md:mx-0 md:w-full  lg:mt-5 h-screen overflow-y-auto  pt-5 md:pt-0'>

<div className='mb-5 hidden md:flex mx-[-20px] md:mx-0'>
<Securitybreadcrumbs activeSubTab={title} title='Manage Email'  />
</div>

<ManageEmail />
</div>
</div>
  </div>
  )
}

export default Index;