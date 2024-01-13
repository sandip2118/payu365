import React from 'react';
import MyAssets from './MyAssets';
import PortSlider from './PortSlider';
import RecentTrans from '../Common/RecentTrans';
import Page from '../Common/Page';
import BottomSpace from '../Common/BottomSpace';
import EsBalance from '../dashboard/EsBalance';

const Wrapper = () => {
  return (
    <Page title={'Portfolio'} className={'md:w-[calc(100%-224px)]'}>
      <div className="mx-5">
        <EsBalance port heading={'Estimated Balance'} />
        <MyAssets />
        <PortSlider />
        <RecentTrans />
      </div>
      <BottomSpace />
    </Page>
  )
}

export default Wrapper
