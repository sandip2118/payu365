import React, { useState } from 'react'
import CardWrapper from '../SettingsCommons/CardWrapper'
import Image from 'next/image'
import PasswordInput from '../../Common/PasswordInput'

function ManagePasswword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [matched, setMatched] = useState<boolean>(false);

  const validatePassword = (
    value: string
  ): { hasNumber: boolean; hasLetter: boolean; isLengthValid: boolean } => {
    const hasNumber = /\d/.test(value)
    const hasLetter = /[a-zA-Z]/.test(value)
    const isLengthValid = value.length >= 7
    return { hasNumber, hasLetter, isLengthValid }
  }

  const passwordValidation = validatePassword(password)
  console.log(passwordValidation)

  const updatePassword = () => {
    console.log(password, 'password updated')
  }

  return (
    <div className='md:mx-5 mb-[100px]'>
      <CardWrapper>
        <div className='grid mx-auto w-full md:w-1/2 md:pt-[50px] md:pb-[30px] py-5 md:py-0'>
          <p className='text-white md:text-[27px] font-[700] flex place-content-center py-[15px]'>Change Password</p>
          <div className='flex  px-4 py-2.5 bg-YELLOW_03 gap-[15px] rounded-[8px]'>
            <Image src='/assets/icons/exclamationPassword.svg' alt='' className='' width={16} height={16} />
            <p className='font14SN text-WHITE_101'>In order to protect your account, withdrawals, P2P selling, payment services will be disabled for 24 hours after you change your password.</p>
          </div>

          <div className='mt-[25px] w-full md:w-[85%] grid gap-[20px] mx-auto'>

            {(password === confirmPassword) ? <div>
              <PasswordInput placeholder='••••••••••' value={password} onChange={(e) => setPassword(e.target.value)} border={true} />
              <label className='font12R text-GREEN_02'>Password matched</label>
            </div>
              :
              <div>
                <PasswordInput placeholder='••••••••••' value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className='font12R text-BLACK_305'>Password matched</label>
              </div>}

            <div className='grid '>
              <PasswordInput placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="font14RB mt-[10px] text-white">
                Password must contain:
              </p>
              <ul className="list-disc py-[5px] text-xs">
                <li
                  className={`${passwordValidation.hasNumber
                      ? 'text-GREEN_02'
                      : 'text-GRAY_101'
                    } font12R flex items-center py-[5px]`}
                >
                  <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />{' '}
                  Contains 1 or more numbers (0-9)
                </li>
                <li
                  className={`${passwordValidation.hasLetter
                      ? 'text-GREEN_02'
                      : 'text-GRAY_101'
                    } font12R flex items-center py-[5px]`}
                >
                  <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />
                  Contains 1 or more letters (a-z, A-Z)
                </li>
                <li
                  className={`${passwordValidation.isLengthValid
                      ? 'text-GREEN_02'
                      : 'text-GRAY_101'
                    } font12R flex items-center py-[5px]`}
                >
                  <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />
                  Is 7 or more characters
                </li>
              </ul>
            </div>

            <div>
              <PasswordInput placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label className='text-BLACK_305 font12R'>Both password must match</label>
            </div>

            <div className='mt-2.5'>
              <button
                className='w-full rounded-[5px] py-[15px] flex place-content-center items-center font14SB bg-BLUE_201  border-none text-white capitalize'
                onClick={updatePassword}
                sx={{ padding: '0' }}
              >
                Update New Password
              </button>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>

  )
}

export default ManagePasswword