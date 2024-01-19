import React ,{useState} from 'react'
import Devices from './Devices';
import Sessions from './Sessions';
import {deviceSessionData } from './DeviceSessionData'
import Header from '../SettingsCommons/Header';


function RecentDevices() {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  const handleDeviceClick = (device: string) => {
    setActiveDevice(prevDevice => prevDevice === device ? null : device);
  };

  const renderSessions = (device: string) => {
    if (activeDevice !== device) return null;

    return deviceSessionData[device].map((session:any, index:any) => (
      <Sessions key={index} {...session} isActive={activeDevice === device} />
    ));
  };


  return (
    <div className='bg-[#1C1C24] px-4 md:rounded-[5px] pb-[20px] md:mx-[20px] grid gap-[20px] rounded-[5px]  mb-[60px]'>
      <div className='border-b-[1px] border-[#44444F] '>
        <Header title='Your devices' description='You’re signed in on these devices or have been in the last 28 days. There might be multiple activity sessions from the same device.' />
      </div>

        <div onClick={() => handleDeviceClick('Window')}>
        <Devices sessions={2} device='Window' platform='Web Platform' isActive={activeDevice === 'Window'} />
        {renderSessions('Window')}
      </div>

      <div onClick={() => handleDeviceClick('Iphone(s)')}>
        <Devices sessions={4} device='Iphone(s)' platform='Iphone(s)' isActive={activeDevice === 'Iphone(s)'} />
        {renderSessions('Iphone(s)')}
      </div>
    </div>
  )
}

export default RecentDevices;