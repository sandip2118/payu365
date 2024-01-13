import React, { useState } from 'react';
import Header from '../SettingsCommons/Header';
import SwitchComponent from '../SettingsCommons/SwitchComponent';
import { SwitchStates } from '../types';

const preferenceSettings = [
  {
    key: 'salesAndTips',
    title: 'Sales & Tips News On Email',
    description: 'News about product and feature updates.',
  },
  {
    key: 'tipsAndTutorials',
    title: 'Tips and tutorials',
    description: 'Tips on getting more out of app features.',
  },
  {
    key: 'reminders',
    title: 'Reminders',
    description: 'These are notifications to remind you of updates you might have missed.',
  },
];

const Preferences = () => {
  const [switchStates, setSwitchStates] = useState<SwitchStates>({
    salesAndTips: true,
    tipsAndTutorials: true,
    reminders: true,
  });

  const handleChange = (key: string) => (nextChecked: boolean) => {
    setSwitchStates(prev => ({ ...prev, [key]: nextChecked }));
  };

 

  return (
    <div className='bg-[#1C1C24] px-4 rounded-[5px] md:mx-[20px] pb-[20px] md:mb-[343px]'>
    <Header  title='Transaction & History' description='Manage your transection and history '/>
    <SwitchComponent settings={preferenceSettings}  switchStates={switchStates} onSwitchChange={handleChange}/>
    </div>
  );
};

export default Preferences;
