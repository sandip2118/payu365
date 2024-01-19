import Header from '@/components/Header'
import Security from '@/components/SettingsV2/Security/Security'
import MobileMenuBar from '@/components/SettingsV2/SettingsCommons/MobileMenuBar'
import Securitybreadcrumbs from '@/components/SettingsV2/SettingsCommons/Securitybreadcrumbs'
import SettingsSideBar from '@/components/SettingsV2/SettingsSideBar'
import { settingsTabs } from '@/components/SettingsV2/SettingsTabs'
import { settingsTabItem } from '@/components/SettingsV2/types'
import React, { useState } from 'react'

function SecurityWrapper() {
  const [activeTab, setActiveTab] = useState<settingsTabItem>(settingsTabs[3]);
  const title = activeTab.title;
  return (
    <div>
    <Header title="Settings" />
    <div className='grid md:flex bg-[#13131A] md:w-full w-screen h-[93vh]  '>
    <SettingsSideBar  activeTab={activeTab} setActiveTab={setActiveTab} />
    <MobileMenuBar   activeTab={activeTab} setActiveTab={setActiveTab}/>
    <div className='w-11/12 sm:w-10/12 mx-auto  md:mx-0 md:w-full  md:mt-5 h-full overflow-y-auto  pt-5 md:pt-0'>
<Security />
</div>
</div>
  </div>
  )
}

export default SecurityWrapper;