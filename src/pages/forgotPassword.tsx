import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'

import Icons from '@/assets/icon'

import { OrDivider } from '../components/Common/OrDivider'
import PasswordInput from '../components/Common/PasswordInput'
import { EnterOTP } from '../components/Login/EnterOTP'
import PhoneWithCountryCode from '../components/Login/PhoneWithCountryCode'
import { TEXT } from '../Constants'

const ForgotPassword = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneCode, setPhoneCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [flag, setFlag] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''))

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.onSubmit(email, password)
  }

  const validatePassword = (
    value: string
  ): { hasNumber: boolean; hasLetter: boolean; isLengthValid: boolean } => {
    const hasNumber = /\d/.test(value)
    const hasLetter = /[a-zA-Z]/.test(value)
    const isLengthValid = value.length >= 8

    return { hasNumber, hasLetter, isLengthValid }
  }

  const passwordValidation = validatePassword(password)

  const _onEmailSubmit = () => {
    if (email !== '') {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        toast.error('Enter valid email')
      } else {
        setFlag('email')
      }
    } else if (phone !== '') {
      if (phone?.length <= 9) {
        toast.error('Enter phone number')
      } else {
        setFlag('phone')
      }
    }
  }

  const _resetPass = () => {
    switch (true) {
      case passwordValidation?.hasNumber == false ||
        passwordValidation?.hasLetter == false ||
        passwordValidation?.isLengthValid == false:
        return toast.error('Your password is weak')
      case !password:
        return toast.error('Enter password')
      case !confirmPassword:
        return toast.error('Enter confirm password')
      case password !== confirmPassword:
        return toast.error('Your password does not match with confirm password')
      default:
      // setIsSuccess(true)
    }
  }

  const _otp = () => {
    const joinOtp = otp?.join('')
    if (joinOtp.length === 4) {
      setIsSuccess(true)
    } else {
      toast.error('Enter valid OTP')
    }
  }

  return (
    <div className="w-full bg-BLACK_302">
      <div
        style={{
          backgroundImage: 'url(/assets/images/nasa.png)',
          backgroundSize: 'cover',
        }}
        className={`m-auto flex h-screen shrink-0 overflow-y-auto mix-blend-screen`}
      >
        {!isSuccess ? (
          <>
            {flag === 'email' ? (
              <div className=" mx-[20px] my-auto flex w-[527px] items-center justify-center rounded-[24px] bg-BLACK_303 px-[20px] py-[32px] sm:m-auto sm:rounded-[10px] sm:px-[61px] sm:py-[50px]">
                <div className=" md:bg-inherit flex-col items-start rounded-3xl bg-BLACK_303 md:w-full md:rounded-none md:backdrop-blur-none">
                  <p className="text-center text-2xl font-bold not-italic !leading-[normal] text-[color:var(--Pure-White,#FFF)]">
                    {TEXT.CREATE_NEW_PASSWORD}
                  </p>
                  <p className="font14RB mt-[15px] text-center !leading-[22px] text-GRAY_101">
                    {TEXT.YOUR_NEW_PASS}
                  </p>
                  <p className="font14RB mt-[5px] text-center !leading-[22px] text-GRAY_101">
                    {TEXT.PREVIOUS_USER}
                  </p>

                  <div className="mt-[25px]">
                    <PasswordInput
                      placeholder="New password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className="font14RB mt-[10px] text-white">
                    Password must contain:
                  </p>
                  <ul className="list-disc py-[5px] text-xs">
                    <li
                      className={`${
                        passwordValidation.hasNumber
                          ? 'text-[#29CC6A]'
                          : 'text-GRAY_101'
                      } font12R flex items-center py-[5px]`}
                    >
                      <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />{' '}
                      Contains 1 or more numbers (0-9)
                    </li>
                    <li
                      className={`${
                        passwordValidation.hasLetter
                          ? 'text-[#29CC6A]'
                          : 'text-GRAY_101'
                      } font12R flex items-center py-[5px]`}
                    >
                      <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />
                      Contains 1 or more letters (a-z, A-Z)
                    </li>
                    <li
                      className={`${
                        passwordValidation.isLengthValid
                          ? 'text-[#29CC6A]'
                          : 'text-GRAY_101'
                      } font12R flex items-center py-[5px]`}
                    >
                      <div className="mr-[11px] h-[6px] w-[6px] rounded-full bg-GRAY_101" />
                      Is 8 or more characters
                    </li>
                  </ul>

                  <div className="mt-[10px]">
                    <PasswordInput
                      placeholder="confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <p className="font12R mt-[10px] text-BLACK_305">
                    Both password must match
                  </p>
                  <div>
                    <button
                      onClick={() => _resetPass()}
                      className="font14SB mt-[25px] flex h-[48px] w-full items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-BLUE_201 font-semibold text-white"
                    >
                      {TEXT.RESET_PASSEORD}
                    </button>
                  </div>

                  <button
                    onClick={() => setFlag('')}
                    className="font16RB mt-[25px] w-full text-center text-base font-medium not-italic !leading-[normal] text-[color:var(--Secondary-Color,#F59C26)]"
                  >
                    {TEXT.BACK_SIGN_IN}
                  </button>
                </div>
              </div>
            ) : flag === 'phone' ? (
              <div className=" mx-[20px] my-auto flex w-[527px] items-center justify-center rounded-[24px] bg-BLACK_303 px-[20px] py-[32px] sm:m-auto sm:rounded-[10px] sm:px-[61px] sm:py-[60px]">
                <div className=" md:bg-inherit flex-col items-start rounded-3xl bg-BLACK_303 md:w-full md:rounded-none md:backdrop-blur-none">
                  <p className="text-left text-2xl font-bold not-italic !leading-[normal] text-[color:var(--Pure-White,#FFF)] sm:text-center">
                    {TEXT.ENTER_OTP_VERIFICATION}
                  </p>
                  <div className="block sm:hidden">
                    <p className="font14RB mx-0 mt-[13px] text-left !leading-[22px] text-GRAY_101 sm:mx-[20%] sm:text-center">
                      {TEXT.WE_SENT_4_DIGIT} your given phone number{' '}
                      <span className="text-white">
                        {' '}
                        +91 *********97 / Email
                      </span>
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="font14RB mx-0 mt-[15px] text-center !leading-[22px] text-GRAY_101 sm:mx-[20%]">
                      {TEXT.WE_SENT_4_DIGIT} your given phone number
                    </p>
                    <p className="font14RB mt-[5px] text-center !leading-[22px] text-white">
                      +91 *********97 / Email
                    </p>
                  </div>

                  <div className="mt-[40.5px]">
                    <EnterOTP OTP={(val: any) => setOtp(val)} />
                  </div>
                  <div>
                    <button
                      onClick={() => _otp()}
                      className="font14SB mt-[30px] flex h-[48px] w-full items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-BLUE_201 font-semibold text-white"
                    >
                      {TEXT.SUBMIT}
                    </button>
                  </div>

                  <p className="font12RB mt-[30px] w-full text-center text-[13px] not-italic text-GRAY_101">
                    Didn’t receive code?{' '}
                    <span
                      onClick={() => {
                        router.push('')
                      }}
                      className="font13SB cursor-pointer !font-semibold !leading-[normal] text-BLUE_201"
                    >
                      Resend
                    </span>
                  </p>

                  <button
                    onClick={() => router.back()}
                    className="font16RB mt-[30px] w-full text-center text-base font-medium not-italic !leading-[normal] text-[color:var(--Secondary-Color,#F59C26)]"
                  >
                    {TEXT.BACK_SIGN_IN}
                  </button>
                </div>
              </div>
            ) : (
              <div className=" my-auto w-[100%] max-w-[527px] sm:m-auto lg:w-[80%] xl:w-[70%] 2xl:w-[60%]">
                <div className="md:bg-inherit mx-5 flex-col items-center justify-center rounded-[10px] bg-BLACK_303 px-5 py-[64px] sm:mx-0 sm:px-[61px] md:w-full md:backdrop-blur-none">
                  <p className="text-center text-2xl font-bold not-italic !leading-[normal] text-[color:var(--Pure-White,#FFF)]">
                    {TEXT.FORGOT_PASSWORD}
                  </p>
                  <p className="font14RB mt-[13px] text-center !leading-[22px] text-GRAY_101">
                    {TEXT.ENTER_EMAIL_OR_PHONE}.
                  </p>

                  <div className="mt-[30px]">
                    <input
                      type="email"
                      id="email"
                      className="font13R h-[48px] w-full rounded border border-GRAY_101 bg-BLACK_303 px-3 text-sm text-GRAY_101 placeholder:text-GRAY_101 focus:text-white"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setPhone('')
                      }}
                    />
                  </div>
                  <OrDivider />
                  <div className="mt-[30px] w-full">
                    <PhoneWithCountryCode
                      value={phone}
                      onChange={(e) => {
                        setPhoneCode(e?.phoneCode)
                        setPhone(e?.value)
                      }}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => _onEmailSubmit()}
                      className="font14SB mt-[30px] flex h-[48px] w-full items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-BLUE_201 font-semibold text-white"
                    >
                      {TEXT.SUBMIT}
                    </button>
                  </div>

                  <button
                    onClick={() => router.back()}
                    className="font16RB mt-[30px] w-full text-center text-base font-medium not-italic !leading-[normal] text-[color:var(--Secondary-Color,#F59C26)]"
                  >
                    {TEXT.BACK_SIGN_IN}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className=" mx-[20px] my-auto flex w-[527px] items-center justify-center rounded-[24px] bg-BLACK_303 px-[20px] py-[32px] sm:m-auto sm:rounded-[10px] sm:px-[61px] sm:py-[50px]">
            <div className=" md:bg-inherit flex-col items-center rounded-3xl bg-BLACK_303 md:w-full md:rounded-none md:backdrop-blur-none">
              <div className="mb-[40px] flex w-full justify-center sm:mb-[20px]">
                <Icons.SuccessfullyIcon />
              </div>
              <p className="text-center text-[22px] font-bold not-italic !leading-[normal] text-[color:var(--Pure-White,#FFF)]">
                {TEXT.SUCCESS_RESTE_PASS}
              </p>
              <p className="font14RB mt-[10px] text-center !leading-[22px] text-GRAY_101 sm:mt-[20px]">
                {TEXT.YOU_CAN_NOW}
              </p>
              <p className="font14RB mt-[5px] text-center !leading-[22px] text-GRAY_101">
                {TEXT.LOGIN_INTO_YOUR_ACCOUNT}
              </p>

              <div>
                <button
                  onClick={() => router.push('/Login')}
                  className="font14SB mt-[20px] flex h-[48px] w-full items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-BLUE_201 font-semibold text-white sm:mt-[30px]"
                >
                  {TEXT.LOGIN}
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ---------------------  --------------------- */}
      </div>
    </div>
  )
}

export default ForgotPassword
