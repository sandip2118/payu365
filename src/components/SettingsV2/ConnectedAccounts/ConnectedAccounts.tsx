import Image from 'next/image'
import React from 'react'
import ConnectGoogle from './ConnectGoogle'
import ConnectApple from './ConnectApple'
import ConnectMetamask from './ConnectMetamask'
import Header from '../SettingsCommons/Header'

function ConnectedAccounts() {
  return (
    <div className='bg-[#1C1C24] px-4 rounded-[5px]  grid gap-[20px] md:mx-[20px] pb-[10px] '>

   <div className='border-b-[1px] border-[#44444F] '>
   <Header title='Connect account with third-party Account' description='Allow or Disable some feature'/>
    </div>

    <div className='  py-[15px] border-b-[1px] border-[#44444F] '>
     <ConnectGoogle />
    </div>

     <div className='  py-[15px] border-b-[1px] border-[#44444F] '>
      <ConnectApple />
     </div>

    <div className='  py-[15px]  '>
      <ConnectMetamask />
      </div>
  
  </div>
  )
}

export default ConnectedAccounts