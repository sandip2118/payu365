import React from 'react';
import PortSlider from './PortSlider';
import RecentTrans from '../Common/RecentTrans';
import Page from '../Common/Page';
import EsBalance from '../dashboard/EsBalance';
import MyAssets from './MyAssets';

const Wrapper = () => {
  return (
    <Page title={'Portfolio'} className={'md:w-[calc(100%-224px)]'}>
      <div className="mx-5">
        <EsBalance port heading={'Estimated Balance'} />
        <MyAssets />
        <PortSlider />
        <RecentTrans />
      </div>
    </Page>
  )
}

export default Wrapper
