import React from 'react'
import EmailNotifications from './EmailNotifications'
import PushNotifications from './PushNotifications'

function Notifications() {
  return (
    <div className='grid gap-[20px] mb-[60px]'>
      <EmailNotifications />
      <PushNotifications />
    </div>
  )
}

export default Notifications