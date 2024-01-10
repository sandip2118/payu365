import React from 'react';
import Switch from 'react-switch';
import Image from 'next/image';
import { SwitchComponentProps } from '../types';


const SwitchComponent: React.FC<SwitchComponentProps> = ({
  settings,
  switchStates,
  onSwitchChange,
}) => {
  const renderSwitch = (key: string) => (
    <Switch
      onChange={onSwitchChange(key)}
      checked={switchStates[key]}
      handleDiameter={14}
      offColor="#FFF"
      onColor="#267FF5"
      offHandleColor="#FFF"
      onHandleColor="#FFF"
      height={18}
      width={30}
      borderRadius={18}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    />
  );

  return (
    <div className='grid'>
      {settings.map(({ key, title, description }) => (
        <div key={key} className='border-t-[1px] border-[#44444F] pt-[30px] pb-4 flex justify-between items-center'>
          <div className='w-1/2 grid gap-[10px]'>
            <p className='font14SN text-[white]'>{title}</p>
            <p className='font12R text-GRAY_101'>{description}</p>
          </div>
          <div className='w-1/4 flex justify-end md:justify-start items-center gap-[8px]'>
            {switchStates[key] ? (
              <>
                <Image src='/assets/icons/checked.svg' alt='Checked' width={15} height={15} />
                <label className='text-[white] font12RB'>On</label>
              </>
            ) : (
              <>
                <Image src='/assets/icons/notChecked.svg' alt='Not Checked' width={15} height={15} />
                <label className='text-[white] font12RB'>Off</label>
              </>
            )}
          </div>
          {renderSwitch(key)}
        </div>
      ))}
    </div>
  );
};

export default SwitchComponent;
