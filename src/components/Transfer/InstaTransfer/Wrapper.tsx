/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Page from './../../Common/Page';
import StepComponent from '../StepComponent';
import Icons from '@/assets/icon';
import { toast } from 'react-toastify';
import AddressBook from './AddressBook';
import DetailsAmount from './DetailsAmount';
import SuccessBox from '../SuccessBox';
import { Dialog, useMediaQuery } from '@mui/material';
import moment from 'moment';
import BottomSpace from '@/components/Common/BottomSpace';

function Wrapper({ title }: any) {
  const router = useRouter()
  const [activeStep, _activeStep] = useState<any>(0);
  const [openReceipt, setOpenReceipt] = useState(false);

  const matches = useMediaQuery('(min-width:600px)');

  const steps = [
    { id: 1, name: 'Address Book' },
    { id: 2, name: 'Details & Amount' },
    { id: 3, name: 'Pay' },
  ]

  const _copyLink = (text: any) => {
    var link = text;
    navigator.clipboard.writeText(link);
    toast.info('copy text');
  };

  const Items = ({ title, value, subAmount, className, copy }: any) => {
    return (
      <div className={`flex items-center justify-between  ${className}`}>
        <p className='font14R sm:!text-sm !text-[10px] sm:w-[132px] w-[100px] text-GRAY_102'>{title}</p>
        <div className='flex max-w-[140px] xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap items-center'>
          <p className='font14RB sm:!text-sm !text-[10px] ml-[15px] mr-[5px] text-white max-w-[140px] xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap'>{value}
            {' '} <span className='text-YELLOW_02'>{subAmount}</span>
          </p>
          {copy &&
            <button
              onClick={() => _copyLink(value)}
              className='flex w-[17px] h-[17px] rounded-full bg-GRAY_106 items-center justify-center'>
              <Icons.CopyIcon />
            </button>
          }
        </div>
      </div>
    )
  }

  return (
    <Page title={title} isBreadcrumbs>
      <div className="w-full flex flex-col mb-5 sm:px-5 px-[10px] mt-[33.5px] items-center">
        <StepComponent steps={steps} activeStep={activeStep} _activeStep={_activeStep} />
        {activeStep === 0 &&
          <AddressBook activeStep={activeStep} _activeStep={_activeStep} />
        }
        {activeStep === 1 &&
          <DetailsAmount activeStep={activeStep} _activeStep={_activeStep} />
        }
        {activeStep === 2 &&
          <>
            <SuccessBox activeStep={activeStep} _activeStep={_activeStep} setOpenReceipt={setOpenReceipt}
              texts={
                <>
                  <p className="font18SB text-center">
                    Money Transfer Successful
                  </p>
                  <p className="font18SB text-center">
                    to Jhone Cooper
                  </p>
                  <p className="font12RB mt-[15px] text-GRAY_101 !leading-[18px] text-center">
                    You have sent <span className='text-white'>$119.99 USD</span> to
                  </p>
                  <p className="font12RB text-GRAY_101 !leading-[18px] text-center">
                    +918140743288 from your wallet/account                  </p>
                </>
              }
              buttons={
                <div className='sm:flex block sm:px-[51.5px] px-[0px] gap-[25px] mt-[25px]'>
                  <button
                    onClick={() => { setOpenReceipt(true) }}
                    className="font14SB bg-BLACK_305 w-full text-white mb-[10px] sm:mb-[0px] flex justify-center items-center self-stretch h-[48px] font-semibold rounded-[5px]"
                  >
                    View Receipt
                  </button>
                  <button
                    onClick={() => _activeStep(0)}
                    className="font14SB bg-BLUE_201 w-full text-white flex justify-center items-center self-stretch h-[48px] font-semibold rounded-[5px]"
                  >
                    Back to home
                  </button>
                </div>
                  }
            />
            <Dialog
              fullWidth
              // style={{ backdropFilter: 'blur(5px)' }}
              PaperProps={{
                style: { borderRadius: 20, background: 'transparent' }
              }}
              open={openReceipt}
              className="w-full"
              maxWidth={'sm'}
              fullScreen={matches ? false : true}
              height={300}
              onClose={() => {
                setOpenReceipt(false);
              }}
            >
              <div className='bg-BLACK_304 h-screen'>
                <div className='bg-BLACK_304 p-[10px] sm:p-[0px]'>
                  <div className='bg-BLACK_303 pt-5 pb-[35px] rounded-[20px] relative flex flex-col items-center'>
                    <button
                      onClick={() => setOpenReceipt(false)}
                      className='absolute right-0 top-0 p-5'
                    >
                      <Icons.Close />
                    </button>
                    <img src={'/assets/images/user2.png'} alt='profile' className='w-[68px] h-[68px] rounded-full bg-GRAY_101' />
                    <p className='font24SMB sm:!text-2xl !text-lg text-white'>Jack Richer Dawson</p>
                    <div className='flex items-center mt-[5px]'>
                      <div className='w-[6px] h-[6px] rounded-full bg-GREEN_02 mr-[5px]' />
                      <p className='font14RB text-GREEN_02 !sm:text-sm !text-xs'>Active wallet - 9874</p>
                    </div>
                    <p className='font30SMB sm:!text-3xl !text-2xl text-white'>₹10,000.00</p>
                  </div>
                  <div className='sm:px-[10px] px-0'>
                    <p className='font22SB text-white mt-5'>Transactions Details</p>
                    <div className='px-[15px] py-3 border border-BLACK_306 rounded-[10px] my-[15px]'>
                      <Items title={'Email'} value={'jackdawson@gmail.com'} className='mb-[10px]' />
                      <Items title={'Wallet ID'} value={'25145789'} />
                    </div>

                    <div className='px-[15px] py-3 border border-BLACK_306 rounded-[10px] my-[15px]'>
                      <Items title={'Date'} value={moment().format('ll')} className='mb-[10px]' />
                      <Items title={'Amount'} value={'₹10,000 INR'} className='mb-[10px]' />
                      <Items title={'Description'} value={'For Investment'} />
                    </div>

                    <div className='px-[15px] py-3 border border-BLACK_306 rounded-[10px] my-[15px]'>
                      <Items copy title={'Transaction ID'} value={'#OP-01012487-411142'} className='mb-[10px]' />
                      <Items title={'Payment  Method'} value={'Master Credit Card'} />
                    </div>
                  </div>

                  <div className='justify-center flex'>
                    <button
                      className="font14SB bg-BLUE_201 w-[195px] mt-[15px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
                    >
                      Get PDF Receipt
                    </button>
                  </div>
                  <BottomSpace className='!h-[30px]' />
                </div>
              </div>
            </Dialog>
          </>
        }
      </div>
    </Page>
  )
}

export default Wrapper
