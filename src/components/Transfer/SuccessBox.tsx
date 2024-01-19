/* eslint-disable complexity */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Card from '../Common/Card'
import Icons from '@/assets/icon'
import { toast } from 'react-toastify'

function SuccessBox({
  activeStep,
  _activeStep,
  setOpenReceipt,
  texts,
  buttons,
}: any) {

  const router = useRouter()
  return (
    <div className="w-full md:w-[580px] mt-[30px]">
      <Card className="px-[90px] py-[30px]">
        <div
          className={`flex flex-col items-center px-[0px] sm:py-[10px] py-0`}
        >
          <div className="w-full justify-center flex mb-[10px]">
            <Icons.SuccessfullyIcon />
          </div>
          <div className="mt-5">{texts}</div>
          <div className="w-full">{buttons}</div>
        </div>
      </Card>
    </div>
  )
}

export default SuccessBox
