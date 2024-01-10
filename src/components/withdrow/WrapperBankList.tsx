import React, { FC, useEffect, useState } from 'react';
import Card from '@/components/common/Card'
import ImgBoxComp from '../Common/ImgBoxComp';
import Icons from '@/assets/icon';
import HistoryList from './HistoryList';
import WithdrawComp from './WithdrawComp';
import { WithdrawIsNew } from './type';


const WrapperBankList: FC<WithdrawIsNew> = ({ IsNew, setIsNewUser, isWithdraw, setIsWithdraw }) => {
  // const [isSuccess, setIsSuccess] = useState(false)
  // const [step, setStep] = useState(1)


  return (
    <div className='w-full'>
      {isWithdraw !== 2 &&
        <div className='mx-5 sm:mx-0'>
          <p className='font24SB text-center'>Withdraw to bank</p>
          <p className='font14R text-GRAY_101 mt-[15px] text-center'>Withdraw your balance from your wallet to personal or business account.</p>
        </div>
      }
      <div className='flex-col sm:flex block items-center w-full'>
        {isWithdraw === 2 ?
          <div className='mt-[20px] sm:mt-[88px] min-w-auto sm:min-w-[447px]'>
            <Card>
              <ImgBoxComp icon={<Icons.SuccessfullyIcon />}
                heading={
                  <p className="font22SB text-center">
                    Withdraw Successful
                  </p>
                }
                subTitle={'Transactions processed successfully'}
                buttonTitle={'View History'}
                onClick={() => { setIsWithdraw && setIsWithdraw(0) }}
                className='sm:px-[90px] px-[30px] sm:py-[63px] py-0 '
              />
            </Card>
          </div>
          : isWithdraw === 0 ?
            <div className='mt-[20px] sm:mt-[40px] sm:w-[364px] w-full'>
              <HistoryList onClick={() => setIsWithdraw && setIsWithdraw(1)}
                setIsNewUser={() => setIsNewUser(1)}
              />
            </div>
            :
            <div className='mt-[20px] sm:mt-[40px] w-auto sm:min-w-[496px]'>
              <WithdrawComp onClick={() => setIsWithdraw && setIsWithdraw(2)} />
            </div>
        }
      </div>
    </div>
  )
}

export default WrapperBankList
