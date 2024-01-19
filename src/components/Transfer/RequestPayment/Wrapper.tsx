/* eslint-disable complexity */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from './../../Common/Page'
import StepComponent from '../StepComponent'
import Icons from '@/assets/icon'
import { toast } from 'react-toastify'
import SelectUserComponent from './SelectUserComponent'
import SuccessBox from '../SuccessBox'
import { useMediaQuery } from '@mui/material'
import { ContainedButton } from './../../Common/Button'
import RequestAmount from './RequestAmount'
import Modal from './../../Common/Modal'
import CopyAllRounded from '@mui/icons-material/CopyAllRounded';
import PersonIcon from '@mui/icons-material/Person'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Wrapper({ title }: any) {
  const router = useRouter()
  const [activeStep, _activeStep] = useState<any>(0)
  const [openViewHistory, setOpenViewHistory] = useState(false)

  const matches = useMediaQuery('(min-width:600px)')

  const steps = [
    { id: 1, name: 'Select User' },
    { id: 2, name: 'Request Amount' },
    { id: 3, name: 'Send' },
  ]

  const _copyLink = (text: any) => {
    var link = text
    navigator.clipboard.writeText(link)
    toast.info('copy text')
  }

  const Items = ({ title, value, subAmount, className, copy }: any) => {
    return (
      <div className={`flex items-center justify-between  ${className}`}>
        <p className="font14R sm:!text-sm !text-[10px] sm:w-[132px] w-[100px] text-GRAY_102">
          {title}
        </p>
        <div className="flex max-w-[140px] xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap items-center">
          <p className="font14RB sm:!text-sm !text-[10px] ml-[15px] mr-[5px] text-white max-w-[140px] xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
            {value} <span className="text-YELLOW_02">{subAmount}</span>
          </p>
          {copy && (
            <button
              onClick={() => _copyLink(value)}
              className="flex w-[17px] h-[17px] rounded-full bg-GRAY_106 items-center justify-center"
            >
              <Icons.CopyIcon />
            </button>
          )}
          {/* <p className='hidden xs:block font14RB sm:!text-sm !text-[10px] text-YELLOW_02'>
            {subAmount}
          </p> */}
        </div>
      </div>
    )
  }

  const ModalTitle = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-[15px]">
          <PersonIcon color="orange" fontSize="large" />
          <div className="flex flex-col items-center gap-2.5">
            <h1 className="text-white text-center text-2xl font-bold">
              Jack Richer Dawson
            </h1>
            <div className="flex items-center gap-1 text-GREEN_02">
              <FiberManualRecordIcon className="text-xs" />
              <p className="text-sm">Received Money</p>
            </div>
            <h1 className="text-white text-center text-3xl font-bold">
              ₹10,000.00
            </h1>
          </div>
        </div>
      </>
    )
  }

  const handleViewHistory = () => {
    setOpenViewHistory(true)
  }

  const handleClose = () => {
    setOpenViewHistory(false)
  }

  return (
    <>
      <Page title={title} isBreadcrumbs>
        <div className="w-full flex flex-col mb-5 sm:px-5 px-[10px] mt-[33.5px] items-center">
          <StepComponent
            steps={steps}
            activeStep={activeStep}
            _activeStep={_activeStep}
          />

          {activeStep === 0 && (
            <SelectUserComponent
              activeStep={activeStep}
              _activeStep={_activeStep}
            />
          )}
          {activeStep === 1 && (
            <RequestAmount activeStep={activeStep} _activeStep={_activeStep} />
          )}
          {activeStep === 2 && (
            <SuccessBox
              activeStep={activeStep}
              _activeStep={_activeStep}
              setOpenReceipt={setOpenViewHistory}
              texts={
                <div className="flex flex-col items-center">
                  <p className="text-center text-[22px]">
                    Your{' '}
                    <span className="text-YELLOW_01">
                      request for collecting
                    </span>{' '}
                    100 USD has been placed successfully.
                  </p>
                  <p className="text-YELLOW_01 text-[18px] mt-[15px] text-center">
                    Please wait until this transaction approve by receiver.
                  </p>
                  <p className="text-xs font-medium leading-[18px] text-GRAY_101 text-center mt-[15px] mx-10">
                    You have sent request of{' '}
                    <span className="text-white">$119.99 USD</span> to Rose
                    (111402441224) from your Wallet Mitul Jetani(#114024)
                  </p>
                </div>
              }
              buttons={
                <div className="flex justify-between gap-[25px] mt-[25px]">
                  <ContainedButton
                    text="View History"
                    onClick={handleViewHistory}
                    className="bg-BLACK_305 rounded-[5px] p-3 w-full hover:bg-BLACK_305"
                  />
                  <ContainedButton
                    text="Cancel Request"
                    onClick={() => _activeStep(0)}
                    className="bg-RED_01 rounded-[5px] p-3 w-full hover:bg-RED_01"
                  />
                </div>
              }
            />
          )}
        </div>
      </Page>
      <Modal
        activeModal={openViewHistory}
        closeIcon={true}
        className="bg-BLACK_304 rounded-[20px]"
        onClose={handleClose}
        title={ModalTitle()}
        titleClassName="pt-5 pb-[35px] px-5 gap-[69px] rounded-[20px] bg-BLACK_302"
      >
        <div className="flex flex-col justify-center items-center gap-[30px] px-5 pt-5 pb-[30px]">
          <div className="flex flex-col justify-center items-center gap-[15px] w-full">
            <p className="text-white text-center text-[22px] font-semibold">
              Transactions Details
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="w-full flex justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Email</p>
                <p className="text-white text-right text-sm font-medium">
                  jackdawson@gmail.com
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Wallet ID</p>
                <p className="text-white text-right text-sm font-medium">
                  25145789
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Date</p>
                <p className="text-white text-right text-sm font-medium">
                  Mar 11, 2020
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Description</p>
                <p className="text-white text-right text-sm font-medium">
                  For Investment
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Amount</p>
                <p className="text-white text-right text-sm font-medium">
                  ₹10,000.00 INR
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="flex justify-between items-center w-full">
                <p className="text-GRAY_102 text-sm font-normal">
                  Transaction ID
                </p>
                <div className="flex gap-1">
                  <p className="text-white text-right text-sm font-medium">
                    #OP-01012487-411142...
                  </p>
                  <div className="w-[17px] h-[17px] bg-BLACK_306 rounded-full flex items-center justify-center p-2.5">
                    <CopyAllRounded
                      fontSize="1"
                      color="secondary"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">
                  Payment Method
                </p>
                <p className="text-white text-right text-sm font-medium">
                  Master Credit Card
                </p>
              </div>
            </div>
          </div>
          <ContainedButton
            className="bg-BLUE_201 rounded-[5px]"
            text="Get PDF Receipt"
          />
        </div>
      </Modal>
    </>
  )
}

export default Wrapper
