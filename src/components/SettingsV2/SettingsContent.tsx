import React from 'react';
import NextBreadcrumbs from '../Common/NextBreadcrumbs';
import { SettingsContentProps } from './types';



const SettingsContent: React.FC<SettingsContentProps> = ({ activeTab }) => {
  const ActiveComponent = activeTab.component;
  const title = activeTab.title;
  return (
    <div className='w-11/12 sm:w-10/12 mx-auto  md:mx-0 md:w-full  lg:mt-5 h-screen overflow-y-auto '>

      <div className='mb-5 flex lg:hidden mx-[-20px] md:mx-0'>
        <NextBreadcrumbs activeSubTab={title} />
      </div>

      <ActiveComponent />
    </div>
  );
};

export default SettingsContent;
