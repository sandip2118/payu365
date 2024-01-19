import Header from '@/components/Header'
import KycVerification from '@/components/SettingsV2/KYCVerification/KycVerification'
import MobileMenuBar from '@/components/SettingsV2/SettingsCommons/MobileMenuBar'
import SettingsSideBar from '@/components/SettingsV2/SettingsSideBar'
import { settingsTabs } from '@/components/SettingsV2/SettingsTabs'
import { settingsTabItem } from '@/components/SettingsV2/types'
import React, { useState } from 'react'

function KYCWrapper() {
  const [activeTab, setActiveTab] = useState<settingsTabItem>(settingsTabs[1]);
  const title = activeTab.title;
  return (
    <div>
    <Header title="Settings" />
    <div className='grid md:flex bg-[#13131A] md:w-full w-screen min-h-screen  '>
    <SettingsSideBar  activeTab={activeTab} setActiveTab={setActiveTab} />
    <MobileMenuBar   activeTab={activeTab} setActiveTab={setActiveTab}/>
    <div className='w-11/12 sm:w-10/12 mx-auto  md:mx-0 md:w-full  md:mt-5 h-screen overflow-y-auto  pt-5 md:pt-0'>
<KycVerification />
</div>
</div>
  </div>
  )
}

export default KYCWrapper;