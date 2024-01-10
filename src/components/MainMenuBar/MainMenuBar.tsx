import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TopBar from './TopBar';
import SecondBar from './SecondBar';
import { tabs, TabItem } from './Tabs';

function MainMenuBar() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<TabItem | undefined>(undefined);

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === router.pathname) || tabs[0];
    setActivePage(currentTab);
  }, [router.pathname]);


  if (!activePage) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <TopBar activePage={activePage} />
      <SecondBar setActivePage={setActivePage} activePage={activePage} />
    </div>
  );
}

export default MainMenuBar;
