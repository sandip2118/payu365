import React, { useState } from 'react';
import MarketView from './MarketView';
import MarketTrade from './MarketTrade';

const Wrapper = () => {
  const [showTradeComponent, setShowTradeComponent] = useState(false);

  const handleTrade = () => {
    setShowTradeComponent(true);
  }
  
  const handleViewHistory = () => {
    setShowTradeComponent(false);
  }

  return (
    <>
      {!showTradeComponent ? (
        <MarketView handleTrade={handleTrade} />
      ) : (
        <MarketTrade handleViewHistory={handleViewHistory}/>
      )}
    </>
  )
}

export default Wrapper;
