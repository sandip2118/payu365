import React from 'react'
import ReferandEarn from './ReferandEarn'
import SelectOptions from './SelectOptions'

function Referrals() {
  return (
    <div className='grid gap-[35px] md:mx-[20px] mb-[60px]'>
    <ReferandEarn />
    <SelectOptions />
  </div>
  )
}

export default Referrals