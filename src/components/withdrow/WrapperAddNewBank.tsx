import React, { useState } from 'react';
import ImgBoxComp from '../Common/ImgBoxComp';
import Icons from '@/assets/icon';
import { colors } from '../../themes';
import AddNewBank from './AddNewBank';
import BankDetails from './BankDetails';
import { WithdrawIsNew } from './type';
import Card from '../Common/Card';


const WrapperAddNewBank: React.FC<WithdrawIsNew> =({ IsNew, setIsNewUser }) => {
  // const [IsNew, setStep] = useState(steps)

  return (
    <div className='min-w-full sm:min-w-[496px]'>
      <p className='font24SB text-center'>Withdraw to bank</p>
      <p className='font14R text-GRAY_101 mt-[15px] text-center'>Withdraw your balance from your wallet to personal or</p>
      <p className='font14R text-GRAY_101 text-center'>business account.</p>
      <div className=''>
        {IsNew == 0 ?
          <div className='mt-[20px] sm:mt-[88px]'>
            <Card>
              <ImgBoxComp icon={<Icons.BankIcon />}
                heading={
                  <p className="font18SB text-center">
                    Bank Transfer
                  </p>
                }
                subTitle={'2-3 Business days'}
                buttonTitle={'Add new bank'}
                onClick={() => { setIsNewUser && setIsNewUser(1) }}
                className='sm:px-[137px] px-[20px] sm:py-[55px] py-0 '
              />
            </Card>
          </div>
          :
          <div className='mt-[20px] sm:mt-[40px]'>
            <div className='flex items-center justify-center'>
              <Icons.DownArrow w={10} h={7} color={IsNew === 1 && colors.GREEN_02} />
              <div className='bg-[transparent] h-[2px] w-[160px] sm:w-[230px]' />
              <div>
                <Icons.DownArrow w={IsNew === 2 && 10} h={7} color={IsNew === 2 && colors.GREEN_02} />
              </div>
            </div>
            <div className='flex items-center justify-center mt-2'>
              {IsNew === 1 ?
                <div className={` ${IsNew === 1 ? 'border-GREEN_02' : 'border-BLACK_305'} bg-GREEN_02 font12SB flex w-[20px] h-[20px] rounded-full border-2 justify-center items-center`}>1</div>
                :
                <Icons.CheckFill w={20} h={20} />
              }
              <div className='bg-BLACK_305 h-[2px] w-[150px] sm:w-[220px]' />
              {IsNew === 1 || IsNew === 2 ?
                <div className={` ${IsNew !== 1 || IsNew === 2 ? 'border-GREEN_02 bg-GREEN_02' : 'border-BLACK_305 text-GRAY_102 bg-[transparent]'}  font12SB flex w-[20px] h-[20px] rounded-full border-2 justify-center items-center`}>2</div>
                :
                <Icons.CheckFill w={20} h={20} />
              }
            </div>
            <div className='flex items-center justify-around mt-2 mx-[5%] sm:mx-0'>
              <div>
                <p className='font12RB text-GREEN_02 sm:ml-[2px] -ml-3'>Bank Information</p>
              </div>
              <div>
                <p className={` ${IsNew !== 1 || IsNew === 2 ? 'text-GREEN_02' : 'text-GRAY_102'} font12RB sm:mr-[13px] mr-1`}>Verify & Add</p>
              </div>
            </div>
            <div className='mt-[30px] sm:mt-[80px]'>
              {IsNew === 1 ?
                <AddNewBank onClick={() => setIsNewUser && setIsNewUser(2)} />
                :
                <BankDetails onClick={() => setIsNewUser && setIsNewUser(1)} />
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default WrapperAddNewBank
