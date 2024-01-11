import React, { useState } from 'react';
import MarketView from './MarketView';
import MarketTrade from './MarketTrade';
import TradeHistory from './TradeHistory';

const Wrapper = () => {
  const [showTradeComponent, setShowTradeComponent] = useState(false);
  const [showTradeHistory, setShowTradeHistory] = useState(false);

  const handleTrade = () => {
    setShowTradeComponent(true);
    setShowTradeHistory(false);
  }
  
  const handleViewHistory = () => {
    setShowTradeComponent(false);
    setShowTradeHistory(true);
  }

  const handleBactToMarket = () => {
    setShowTradeComponent(false);
    setShowTradeHistory(false);
  }

  return (
    <>
      {(!showTradeComponent && !showTradeHistory) && (
        <MarketView handleTrade={handleTrade} />
      ) }
      {showTradeComponent && 
        (<MarketTrade handleViewHistory={handleViewHistory} handleBactToMarket={handleBactToMarket} />)
      }
      {showTradeHistory && (
        <TradeHistory />
      )}
    </>
  )
}

export default Wrapper;
