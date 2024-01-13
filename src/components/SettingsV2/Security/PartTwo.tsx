import React from 'react'
import Header from '../SettingsCommons/Header'
import CardWrapper from '../SettingsCommons/CardWrapper'
import SecuritySettings from '../SettingsCommons/SecuritySettings'

function PartTwo() {
  return (
    <CardWrapper>
       <Header title='Two-Factor Authentication (2FA)' description='Triple your security with your personal credential.' isBorder={true}/>
       <SecuritySettings tag={true} icon={true} iconPath='/assets/icons/passkeys.svg' title='Passkeys' description='Protect your account and withdrawals with Passkeys and/or security keys such as DigiKey.' extra={true} extraText='Having trouble ?' switch={true} switchIcon={true}  switchText='On' buttonText="Manage" isBorder={true} />
       <SecuritySettings tag={false} icon={true} iconPath='/assets/icons/AuthenticatorApp.svg' title='Authenticator App' description='Use google Authenticator to protect your account and transactions.' extra={false} extraText='Having trouble ?' switch={true} switchIcon={true}  switchText='On' buttonText="Manage" isBorder={true}/>
       <SecuritySettings tag={false} icon={true} iconPath='/assets/icons/email.svg' title='Email' description='Use your email to protect your account and transactions.' extra={false} extraText='Having trouble ?' switch={true} switchIcon={false}  switchText='Off' buttonText="Manage" isBorder={true} route='manageEmail' tabTitle='Manage Email'/>
       <SecuritySettings tag={false} icon={true} iconPath='/assets/icons/phoneNo.svg' title='Phone Number' description='Use your phone number to protect your account and transactions.' extra={false} extraText='Having trouble ?' switch={true} switchIcon={true}  switchText='+91 81******88' buttonText="Manage" isBorder={true} route='managePhoneNo' tabTitle='Manage Mobile Number'/>
       <SecuritySettings tag={false} icon={true} iconPath='/assets/icons/loginPass.svg' title='Login Password' description='Use your phone number to protect your account and transactions.' extra={false} extraText='Having trouble ?' switch={true} switchIcon={true}  switchText='Off' buttonText="Manage" isBorder={false} route='managePassword' tabTitle='Manage Login Password'/>
    </CardWrapper>
  )
}

export default PartTwo