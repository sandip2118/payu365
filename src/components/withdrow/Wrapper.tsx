import React, { useState } from 'react';
import Page from "@/components/common/Page";
import WrapperAddNewBank from './WrapperAddNewBank';
import WrapperBankList from './WrapperBankList';

const Wrapper = () => {
  const [isArr, setIsArr] = useState(false)
  const [isNewUser, setIsNewUser] = useState(0)
  const [isWithdraw, setIsWithdraw] = useState(0)
  return (
    <Page title={'Withdraw'} balance={'10,000 INR'} isBreadcrumbs>
      <div className="w-full flex flex-col mb-5 px-5 sm:px-0 mt-[30px] items-center">
        {!isArr && !isNewUser ?
          <WrapperBankList
            IsNew={isNewUser}
            setIsNewUser={(val: any) => { setIsNewUser(val) }}
            isWithdraw={isWithdraw}
            setIsWithdraw={(val: any) => { setIsWithdraw(val) }}
          />
          :
          <WrapperAddNewBank IsNew={isNewUser} setIsNewUser={(val: any) => { setIsNewUser(val) }} />
        }
      </div>

    </Page>
  )
}

export default Wrapper
