import React, { useState } from 'react';
import Header from '../SettingsCommons/Header';
import SwitchComponent from '../SettingsCommons/SwitchComponent';
import { SwitchStates } from '../types';


const notificationSettings = [
  {
    key: 'newsandupdates',
    title: 'News and updates',
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

const PushNotifications = () => {
  const [switchStates, setSwitchStates] = useState<SwitchStates>({
    newsandupdates: true,
    tipsAndTutorials: true,
    reminders: true,
  });

  const handleChange = (key: string) => (nextChecked: boolean) => {
    setSwitchStates(prev => ({ ...prev, [key]: nextChecked }));
  };

 

  return (
    <div className='bg-[#1C1C24] px-4 md:rounded-[5px] pb-[20px] md:mx-[20px]'>
    <Header  title='Push notifications' description='Get push notifications in-app to find out what’s going on when you’re online.'/>
    <SwitchComponent settings={notificationSettings}  switchStates={switchStates} onSwitchChange={handleChange}/>
    </div>
  );
};

export default PushNotifications;
