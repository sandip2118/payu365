import React from 'react'
import TemporarilyDeactivate from './TemporarilyDeactivate'
import PermanentlyDeactivate from './PermanentlyDeactivate'
import DeactivateAlert from './DeactivateAlert'

function DeactivateAcc() {
  return (
    <div className='grid gap-[35px] md:mx-[20px] pb-[120px]'>
      <DeactivateAlert />
    <TemporarilyDeactivate />
    <PermanentlyDeactivate />
      </div>
  )
}

export default DeactivateAcc