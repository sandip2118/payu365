/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BottomSpace from '../../Common/BottomSpace'
import Page from './../../Common/Page';
import StepComponent from '../StepComponent';
import Card from '../../Common/Card'
import DetailsAmount from './DetailsAmount';

function Wrapper({ title }: any) {
  const router = useRouter()
  const [activeStep, _activeStep] = useState<any>(0);
  console.log('activeStep', activeStep);

  return (
    <Page title={title} isBreadcrumbs>
      <div className="w-full flex flex-col mb-5 sm:px-5 px-[10px] mt-[33.5px] items-center">
        <StepComponent activeStep={activeStep} _activeStep={_activeStep} />
        <DetailsAmount activeStep={activeStep} _activeStep={_activeStep} />
      </div>
    </Page >
  )
}

export default Wrapper
