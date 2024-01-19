import React from 'react'
import CountryInfo from '../SettingsV2/BasicInformation/CountryInfo'
import BankNames from './DepositCommons/BankNames';

function NetBankingComponent() {
  return (
    <div className='grid gap-5 pb-2.5'>
      <div className='grid gap-2.5'>
        <p className='font12RB'>Bank Country*</p>
        <div className='px-5 bg-BLACK_304 rounded-[5px] flex items-center'>
        <CountryInfo />
        </div>
      </div>

      <div className='grid gap-2.5 '>
        <p className='font12RB text-GRAY_101'>Bank Name*</p>
        <div className='px-5 bg-BLACK_304 rounded-[5px] flex items-center'>
        <BankNames />
        </div>
      </div>
    </div>
  )
}

export default NetBankingComponent;