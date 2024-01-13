/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../Common/Card'
import Icons from '@/assets/icon';
import { colors } from './../../../themes';
import PhoneWithCountryCode from './../../Login/PhoneWithCountryCode';
import CurrencyInfo from './../../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from './../../Common/InputField';
import { toast } from 'react-toastify';
import { ROUTE } from '@/Constants';

function DetailsAmount({ activeStep, _activeStep }: any) {
  const router = useRouter();
  const [check, setCheck] = useState(false)
  const [walletID, setWalletID] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');
  const [email, setEmail] = useState('');
  const [selecteCurrency, setSelecteCurrency] = useState({
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
  });
  const handleClick = () => {
    // switch (true) {
    //   case !selecteCurrency:
    //     return toast.error('Select bank currency')
    //   case !selecteBank:
    //     return toast.error('Enter bank')
    //   case !acHolderName:
    //     return toast.error('Enter account holder name')
    //   case phone?.length <= 9:
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
    _activeStep(activeStep + 1)
    toast.success('Add details and amountsuccessfully')
  }

  return (

    <div className='min-w-full lg:min-w-[580px] mt-[30px]'>
      <Card className='sm:px-5 px-[10px]'>
        <div className='bg-BLACK_304 rounded-[5px] py-5 sm:px-5 px-[10px]'>
          <div className='flex' onClick={() => setCheck(!check)}>
            {check ?
              <div className='w-[15px] h-[15px] rounded-[4px] bg-BLACK_301 border border-GRAY_102' />
              :
              <Icons.CheckFillSquare />
            }
            <p className='font14SB text-white ml-2'>Use Wallet Balance</p>
          </div>
          <div className='mt-[15px] flex sm:gap-[10px] gap-[5px] items-center justify-between'>
            <div className='flex items-center'>
              <img src={'/assets/images/user1.png'} alt='profile' className='w-[50px] h-[50px] rounded-full bg-GRAY_101' />
              <div className='sm:ml-[10px] ml-[5px]'>
                <div className='flex items-center'>
                  <p className='font14RB text-BLUE_201 !sm:text-sm !text-xs'>Mitul Jetani</p>
                  <div className='min-w-[6px] min-h-[6px] rounded-full bg-YELLOW_01 mx-[5px]' />
                  <p className='font14RB text-YELLOW_01 !sm:text-sm !text-xs'>Switch account</p>
                </div>
                <div className='flex items-center mt-[5px]'>
                  <div className='w-[6px] h-[6px] rounded-full bg-GREEN_02 mr-[5px]' />
                  <p className='font14RB text-GRAY_101 !sm:text-sm !text-xs'>Active wallet - 9874</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push(ROUTE.DEPOSIT)}
              className='font12SB text-GRAY_102 bg-BLACK_305 sm:w-[85px] w-auto px-2 h-[28px] flex justify-center items-center rounded-[5px]'>
              Deposit
            </button>
          </div>
        </div>

        <div className="w-full mt-[25px] mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Wallet ID*
          </p>
          <InputField
            placeholder="Enter valid wallet ID"
            value={walletID}
            onChange={(e) => setWalletID(e.target.value)}
          />
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Name
          </p>
          <InputField
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>


        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Recipient Mobile Number
          </p>
          <PhoneWithCountryCode
            value={phone}
            onChange={(e) => {
              setPhoneCode(e?.phoneCode)
              setPhone(e?.value)
            }}
            placeholder='Phone number'
            className={'sm:bg-BLACK_304 bg-[transparent]'}
          />
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Select Currency
          </p>
          <div className='bg-BLACK_304 h-[48px] mb-[10px] w-full rounded-[5px]'>
            <CurrencyInfo onSelect={(val) => setSelecteCurrency(val)}
              width={'w-full'}
              menuStyle='w-[250px] sm:w-[300px]'
              RenderMenuBtn={
                <div className={`flex bg-BLACK_304 px-3 rounded-lg items-center justify-between w-full h-[48px]`}>
                  <div className='flex'>
                    <div className='w-[20px] h-[15px]'>
                      <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
                    </div>
                    <p className="font12R mx-[5px]">
                      {selecteCurrency?.currency?.symbol} ({selecteCurrency?.currency?.code})
                    </p>
                  </div>
                  <Icons.DownArrow />
                </div>
              }
            />
          </div>
        </div>

        <div className="w-full mb-[20px]">
          <div className='flex justify-between'>
            <p className="font12RB text-white  mb-[10px]">
              Enter Amount
            </p>
            <div className='flex'>
              <Icons.CurrencyRevert />
              <p className="font12RB text-white mb-[10px]">
                {selecteCurrency?.currency?.symbol} ({selecteCurrency?.currency?.code})
              </p>
            </div>
          </div>
          <div className='bg-BLACK_304 h-[48px] mb-[10px] rounded-[5px]'>
            <div className='flex relative items-center pl-5 justify-between rounded-[5px]'>
              <p className='font14R w-full'>
                ₹10,000.00
              </p>
              <CurrencyInfo onSelect={(val) => setSelecteCurrency(val)}
                menuStyle='w-[250px] sm:w-[300px]'
                RenderMenuBtn={
                  <div className={`flex bg-BLACK_304 pl-3 rounded-lg items-center justify-center w-[150px] h-[48px]`}>
                    <div className='w-[20px] h-[15px]'>
                      <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
                    </div>
                    <p className="font12R mx-[5px]">
                      {selecteCurrency?.currency?.symbol} ({selecteCurrency?.currency?.code})
                    </p>
                    <Icons.DownArrow />
                  </div>
                }
              />
            </div>
          </div>
          <div className='sm:flex block justify-between mb-[20px]'>
            <p className='font10RB text-YELLOW_02'>≈ $119.99 USD</p>
            <p className='font10RB text-GREEN_02 text-right mt-1 sm:mt-0'>Available Balance: $105.30</p>
          </div>
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Send Receipt on this email address
          </p>
          <InputField
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className='font12RB text-GRAY_101 text-center'>PayU365 Fee <span className='text-YELLOW_02'> (Wallet to Wallet Transfer Free)</span></p>

        <div>
          <button
            onClick={handleClick}
            className="font14SB bg-BLUE_201 w-full mt-[25px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
          >
            Review
          </button>
        </div>
      </Card>
    </div>
  );
}

export default DetailsAmount;
