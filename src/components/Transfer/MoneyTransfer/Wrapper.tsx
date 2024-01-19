/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Page from './../../Common/Page';
import WrapperQuickBank from './QuickBank/WrapperQuickBank';
import WrapperSelfAccont from './SelfAccount/WrapperSelfAccont';
import WrapperUpiTrans from './UPI/WrapperUpiTrans';

function Wrapper({ title }: any) {
  const router = useRouter()

  const [options, setOptions] = useState('')
  console.log('options', options);

  return (
    <Page title={title} isBreadcrumbs>
      <div className="w-full flex flex-col mb-5 sm:px-5 px-[10px] mt-[33.5px] items-center">
        {/* <StepComponent steps={steps} activeStep={activeStep} _activeStep={_activeStep} /> */}
        {/* {transOption == "" && activeStep === 0 && */}
        {(options === 1 || options === '') &&
          <WrapperQuickBank setOptions={setOptions} />
        }
        {options === 2 &&
          <WrapperSelfAccont />
        }
        {options === 3 &&
          <WrapperUpiTrans />
        }

      </div>
    </Page>
  )
}

export default Wrapper
