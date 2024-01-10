/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../common/Card';
import Icons from '@/assets/icon';
import { colors } from './../../themes';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import PhoneWithCountryCode from '../Login/PhoneWithCountryCode';
import CurrencyInfo from '../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from '../Common/InputField';
import { toast } from 'react-toastify';
interface prop {
  onClick?: () => void
}

const currency = {
  "id": 98,
  "name": "India",
  "isoAlpha2": "IN",
  "isoAlpha3": "IND",
  "isoNumeric": 356,
  "currency": {
    "code": "INR",
    "name": "Rupee",
    "symbol": "₹"
  },
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
}

function AddNewBank({ onClick }: prop) {
  const router = useRouter();
  const [radioSelect, setRadioSelect] = useState('Saving')
  const [selecteCurrency, setSelecteCurrency] = useState(currency);
  const [selecteBank, setSelecteBank] = useState('');
  const [acHolderName, setAcHolderName] = useState('');
  const [phone, setPhone] = useState('')
  const [phoneCode, setPhoneCode] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [accountAccountNo, setAccountAccountNo] = useState('')
  const [ifscCode, setIfscCode] = useState('')
  const [branchName, setBranchName] = useState('')

  const arr = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Gujarati' },
  ]

  const RadioArr = [
    { title: 'Saving' },
    { title: 'Salary' },
    { title: 'Current' },
  ]


  const handleClick = () => {
    // switch (true) {
    //   case !selecteCurrency:
    //     return toast.error('Select bank currency')
    //   case !selecteBank:
    //     return toast.error('Enter bank')
    //   case !acHolderName:
    //     return toast.error('Enter account holder name')
    //   case phone?.length <= 12:
    //     return toast.error('Please Enter valid phone number')
    //   case !accountNo:
    //     return toast.error('Enter account number')
    //   case !accountAccountNo:
    //     return toast.error('Enter confirm account number')
    //   case accountNo !== accountAccountNo:
    //     return toast.error('Your account number does not match with confirm account number')
    //   case !branchName:
    //     return toast.error('Enter branch name')
    // }
    toast.success('User Created')
    onClick && onClick(2)
  }


  return (
    <>
      <div className='mb-5'>
        <Card>
          <p className='font18SB'>Country Location of Bank</p>
          <p className='font12RB text-GRAY_101 mt-[10px]'>Select your bank location’s country name.</p>

          <div className='w-full sm:flex block gap-5 mt-[30px] '>
            <div className='w-full mb-[10px] sm:mb-0'>
              <p className="font12RB text-GRAY_101 mb-[10px]">
                Bank Country *
              </p>
              <div className='relative'>
                <CurrencyInfo
                  bank
                  width={'w-full'}
                  country={selecteCurrency} onSelect={(val) => setSelecteCurrency(val)}
                  menuStyle='w-[220px]'
                  RenderMenuBtn={
                    <div className="flex bg-BLACK_304 h-[48px] px-5 rounded-[5px] justify-between items-center">
                      <div className='flex gap-5'>
                        <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} />
                        <p className="font14R text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] mr-1">
                          {selecteCurrency?.name}
                        </p>
                      </div>
                      <Icons.DownArrow />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font12RB text-GRAY_101 mb-[10px]">
                Currency
              </p>
              <InputField
                disabled
                placeholder={`(${selecteCurrency?.currency?.symbol}) ${selecteCurrency?.currency?.code}`}
              />

            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <p className='font18SB'>Enter Account Details</p>
          <p className='font12RB text-GRAY_101 mt-[10px]'>Add your account information for withdrawal balance</p>
          <div className='w-full mt-[30px] mb-[20px] relative'>
            <p className="font12RB text-GRAY_101 mb-[10px]">
              Bank Name *
            </p>
            <Menu
              transition
              menuStyle={{ borderRadius: '7px' }}
              menuButton={<MenuButton
                className="relative w-full"
                onClick={() => { }}
              >
                <div className="flex bg-BLACK_304 h-[48px] px-5 rounded-[5px] justify-between items-center">
                  <div className='flex gap-5'>
                    <img src={''} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                    <p className="font14R text-white">
                      Canada
                    </p>
                  </div>
                  <Icons.DownArrow color={colors.white} />
                </div>
              </MenuButton>}
            >
              <div className="rounded-[4px] bg-BLACK_302 cursor-pointer py-[5px]">
                <MenuItem className="!p-0 w-[218px]" >
                  {arr?.map((d, i) => {
                    return (
                      <div key={i} className='flex py-[10px] px-5 gap-5'
                        onClick={() => setSelecteBank(d)}
                      >
                        <img src={''} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                        <p className="font14R text-white">
                          Canada
                        </p>
                      </div>
                    )
                  })}
                </MenuItem>
              </div>
            </Menu>
          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Account Holder Name* <span className='text-GRAY_101'> (As per Bank Records)</span>
            </p>
            <InputField
              placeholder="Ex: Jhon Smith"
              value={acHolderName}
              onChange={(e) => setAcHolderName(e.target.value)}
            />
          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white mb-[10px]">
              Mobile Number* <span className='text-GRAY_101'> (As per Bank Records)</span>
            </p>

            <PhoneWithCountryCode
              value={phone}
              onChange={(e) => {
                setPhoneCode(e?.phoneCode)
                setPhone(e?.value)
              }}
            />
          </div>

          <div className='sm:flex block gap-5 mb-[20px]'>
            <div className="w-full mb-[20px] sm:mb-0">
              <p className="font12RB text-white mb-[10px]">
                Account No *
              </p>
              <InputField
                type="number"
                placeholder="Ex: 1234567890"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="font12RB text-white  mb-[10px]">
                Confirm Account No*
              </p>
              <InputField
                type="number"
                placeholder="Ex: 1234567890"
                value={accountAccountNo}
                onChange={(e) => setAccountAccountNo(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Swift / IFSC Code
            </p>
            <InputField
              type="number"
              placeholder="Ex: 1234567890"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </div>

          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Branch Name *
            </p>
            <InputField
              placeholder="Texas Branch"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />

          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Account Type
            </p>
            <div className='flex grid-cols-3 justify-between'>
              {RadioArr?.map((d, i) => {
                return (
                  <div key={i} onClick={() => setRadioSelect(d?.title)}
                    className='flex items-center gap-[10px]'
                  >
                    {radioSelect === d?.title ?
                      <Icons.CheckFill />
                      :
                      <div className='w-[19px] h-[19px] rounded-full border-2 border-BLACK_306' />
                    }
                    <p className='font14R'>{d?.title}</p>
                  </div>

                )
              })}
            </div>
          </div>
          <div>
            <button
              onClick={handleClick}
              // onClick={() => onClick && onClick(2)}
              className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
            >
              Submit Details
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddNewBank;
