import CountryInfo from './CountryInfo';
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader';
import InputField from '../../Common/InputField';
import { useState } from 'react';
import ImageUploader from './ImageUploader';

function BasicInfoPartOne() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const defaultImage = '/assets/images/profile.png';

  return (
    <div className='bg-[#1C1C24] px-4 rounded-[5px] pb-[20px]'>

      <div className='grid md:gap-[20px]'>
        <BasicInfoHeader title='Basic Information' description='View and update your account details' buttonText='Manage' buttonColor='grey' />

        <ImageUploader defaultImageUrl={defaultImage} />

        <div className='grid md:flex md:justify-between gap-[25px]'>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1'>First Name</label>
            <InputField
              type="text"
              placeholder="Enter name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1 '>Last Name</label>
            <InputField
              type="text"
              placeholder="Enter Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>

        <div className='grid md:flex md:justify-between gap-[25px]'>
          <div className='grid text-start gap-[10px] w-[100%] pt-[25px] md:pt-[0px]'>
            <label className='font12RB text-GRAY_101 px-1 '> Country of Origin *</label>
            <div className=' flex items-center bg-[#292932] place-content-center rounded-[5px] sm:px-5 px-4'>
              <CountryInfo />
            </div>
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1 '>Language</label>
            <div className=' flex items-center bg-[#292932] place-content-center rounded-[5px] sm:px-5 px-4'>
              <select className='w-full h-[47px] font12R  flex items-center bg-[#292932] text-white focus:outline-none focus:border-none'>
                <option className=''>English</option>
              </select>
            </div>
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white  px-1'>Account Status</label>
            <div className='text-[#23C38E] sm:nk
            px-5 px-4 h-[47px] font12R rounded-[5px]  flex items-center bg-[#292932]'>Active</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BasicInfoPartOne