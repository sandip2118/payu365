import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import InputField from '../Common/InputField'
import PasswordInput from '../Common/PasswordInput'
import PhoneWithCountryCode from '../Login/PhoneWithCountryCode'

type SignupFormProps = {
  onSubmit: (email: string, password: string) => void
}

const SignupForm = (props: SignupFormProps) => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneCode, setPhoneCode] = useState('')

  const validatePassword = (
    value: string
  ): { hasNumber: boolean; hasLetter: boolean; isLengthValid: boolean } => {
    const hasNumber = /\d/.test(value)
    const hasLetter = /[a-zA-Z]/.test(value)
    const isLengthValid = value.length >= 8
    return { hasNumber, hasLetter, isLengthValid }
  }

  const passwordValidation = validatePassword(password)

  const handleClick = () => {
    switch (true) {
      case !firstName:
        return toast.error('Enter first name')
      case !lastName:
        return toast.error('Enter last name')
      case phone?.length <= 9:
        return toast.error('Please Enter valid phone number')
      case email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email):
        return toast.error('Enter valid email')
      case passwordValidation?.hasNumber == false ||
        passwordValidation?.hasLetter == false ||
        passwordValidation?.isLengthValid == false:
        return toast.error('Your password is weak')
      case !password:
        return toast.error('Enter password')
      case !confirmPassword:
        return toast.error('Enter Confirm password')
      case password !== confirmPassword:
        return toast.error('Your password does not match with confirm password')
    }
    toast.success('User Created')
    router.push('/dashboard')
  }

  return (
    <div className=" w-[100%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%]">
      <div className="mx-5 h-screen md:mx-0 ">
        <div className="md:bg-inherit mt-[61px] flex-col items-start rounded-3xl bg-BLACK_303 px-5 pb-8  pt-[32px] md:mt-[111px] md:w-full md:rounded-none md:backdrop-blur-none">
          <p className="text-2xl font-bold not-italic !leading-[normal] text-[color:var(--Pure-White,#FFF)]">
            Sign up
          </p>
          <p className="mt-[15px] self-stretch text-sm font-medium not-italic !leading-[22px] text-GRAY_101">
            Enter details to create your account
          </p>

          <div className="">
            <div className="mt-[40px] w-full">
              <div className="mb-[20px] flex gap-2">
                <div className="group w-1/2">
                  <label
                    htmlFor="firstname"
                    className="font12RB mb-[10px] block text-GRAY_101 group-focus-within:text-white"
                  >
                    First Name<sup>*</sup>
                  </label>
                  <InputField
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="group w-1/2">
                  <label
                    htmlFor="lastname"
                    className="font12RB mb-[10px] block text-GRAY_101 group-focus-within:text-white"
                  >
                    Last Name<sup>*</sup>
                  </label>
                  <InputField
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="group my-[25px]">
                <label
                  htmlFor="email"
                  className="font12RB mb-[10px] block text-GRAY_101 focus:text-white group-focus-within:text-white"
                >
                  Mobile Number<sup>*</sup>
                </label>
                <div className="mt-[10px]">
                  <PhoneWithCountryCode
                    value={phone}
                    onChange={(e) => {
                      setPhoneCode(e?.phoneCode)
                      setPhone(e?.value)
                    }}
                  />
                </div>
              </div>
              <div className="group mb-[25px]">
                <label
                  htmlFor="email"
                  className="font12RB mb-[10px] block text-GRAY_101 group-focus-within:text-white"
                >
                  Email Address
                </label>
                <InputField
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group mb-[15px]">
                <label
                  htmlFor="password"
                  className="font12RB mb-[10px] block text-GRAY_101 group-focus-within:text-white"
                >
                  Create Password<sup>*</sup>
                </label>
                <PasswordInput
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
              </div>
              <div className="group mb-[20px]">
                <label
                  htmlFor="password"
                  className="font12RB mb-[10px] block text-GRAY_101 group-focus-within:text-white"
                >
                  Confirm Password<sup>*</sup>
                </label>
                <PasswordInput
                  placeholder="Enter confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={handleClick}
                  className="font14SB mt-[30px] flex h-[48px] w-full items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-BLUE_201 font-semibold text-white"
                >
                  Create an Account
                </button>
              </div>
            </div>
            <div className="md:h-[200px]">
              <p className=" font13RB mt-[35px] w-full text-center text-[13px] text-white">
                Already have an account?{' '}
                <span
                  className="cursor-pointer !font-semibold text-BLUE_201 underline"
                  onClick={() => router.push('Login')}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-5" />
      </div>
    </div>
  )
}

export { SignupForm }
