import Image from 'next/image';
import React, { useState, ReactElement, useContext } from 'react';
import Icons from './../../assets/icon'
import Link from 'next/link';
import { AppContext } from '@/context/AppProvider';
import { colors } from '../../themes';
import { useRouter } from 'next/router';
import { ROUTE } from '@/Constants';

//components for each menu item
const Item1Component: React.FC = () => <div><Index /></div>;
const Item2Component: React.FC = () => <div> <Index /> </div>;
const Item3Component: React.FC = () => <div> <Index /> </div>;
const Item4Component: React.FC = () => <div><Index /></div>;
const Item5Component: React.FC = () => <div><Index /></div>;
const Item6Component: React.FC = () => <div><Index /></div>;
const Item7Component: React.FC = () => <div><Index /></div>;
const Item8Component: React.FC = () => <div><Index /></div>;
const Item9Component: React.FC = () => <div><Index /></div>;


function SideBar() {
  const { pathname } = useRouter()

  const context = useContext(AppContext)
  const [activeComponent, setActiveComponent] = useState<ReactElement | null>(<Item1Component />);
  const [activeItemId, setActiveItemId] = useState<number>(1);

  const handleMenuClick = (component: ReactElement, itemId: number) => () => {
    // context?.setSidebarOpen(!context.sidebarOpen)
    setActiveComponent(component);
    setActiveItemId(itemId);
  };

  const isActive = (itemId: string) => {
    return itemId === pathname ?
      'bg-BLUE_201 text-BLUE_201 border-BLUE_201 rounded-[8px] text-white font13SB' : // Active styles
      'text-GRAY_101'; // Inactive styles
  };

  const getIconSrc = (iconName: string, itemId: number) => {
    return activeItemId === itemId ? `/assets/icons/${iconName}-active.svg` : `/assets/icons/${iconName}-inactive.svg`;
  };

  return (
    <div className={`${!context.sidebarOpen ? 'md:block hidden' : 'block md:hidden'} bg-BLACK_301 relative h-[100%] border-r border-[#292932]`}>
      <ul className={`menu w-56 rounded-box font-[600] px-3 overflow-y-auto h-[calc(100%-50px)] `}>
        <div className='flex h-[48px] items-center my-[20px]'>
          <Icons.Logo />
        </div>
        <li onClick={handleMenuClick(<Item1Component />, 1)}>
          <Link href="/dashboard">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.DASHBOARD)}`}>
              {/* <Image alt='icons' src={getIconSrc('dashboard', 1)} width={17} height={17} /> */}
              <Icons.Dashboard color={ROUTE.DASHBOARD === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Dashboard</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item2Component />, 2)}>
          <Link href="/portfolio">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.PORTFOLIO)}`}>
              {/* <Image alt='icons' src={getIconSrc('portfolio', 2)} width={17} height={17} /> */}
              <Icons.Portfolio color={ROUTE.PORTFOLIO === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Portfolio</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item3Component />, 3)}>
          <Link href="/market">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.MARKET)}`}>
              {/* <Image alt='icons' src={getIconSrc('market', 3)} width={17} height={17} /> */}
              <Icons.Market color={ROUTE.MARKET === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Market</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item4Component />, 4)}>
          <Link href="/transactions">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.TRANSACTIONS)}`}>
              {/* <Image alt='icons' src={getIconSrc('transactions', 4)} width={17} height={17} /> */}
              <Icons.Transactions color={ROUTE.TRANSACTIONS === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Transactions</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item5Component />, 5)}>
          <Link href="/deposit">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.DEPOSIT)}`}>
              {/* <Image alt='icons' src={getIconSrc('deposit', 5)} width={17} height={17} /> */}
              <Icons.Deposit color={ROUTE.DEPOSIT === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Deposit</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item6Component />, 6)}>
          <Link href="/transfer">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.TRANSFER)}`}>
              {/* <Image alt='icons' src={getIconSrc('transfer', 6)} width={17} height={17} /> */}
              <Icons.Transfer color={ROUTE.TRANSFER === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Transfer</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item7Component />, 7)}>
          <Link href="/addressBook">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.ADDRESS_BOOK)}`}>
              {/* <Image alt='icons' src={getIconSrc('addressbook', 7)} width={17} height={17} /> */}
              <Icons.AddressBook color={ROUTE.ADDRESS_BOOK === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Address Book</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item8Component />, 8)}>
          <Link href="/withdraw">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.WITHDROW)}`}>
              {/* <Image alt='icons' src={getIconSrc('withdraw', 8)} width={17} height={17} /> */}
              <Icons.Withdraw color={ROUTE.WITHDROW === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Withdraw</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item9Component />, 9)}>
          <Link href="/settings">
            <div className={`flex gap-[15px] items-center h-[37px] px-3 mb-[10px] ${isActive(ROUTE.SETTINGS)}`}>
              {/* <Image alt='icons' src={getIconSrc('settings', 9)} width={17} height={17} /> */}
              <Icons.Settings color={ROUTE.SETTINGS === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Settings</p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={`menu w-56 rounded-box font-[600] px-3 border-r border-[#292932] absolute bottom-0`}>
        <li>
          <Link href="/Login">
            <div className={`flex gap-[15px] items-center h-[57px] px-3 bg-BLACK_301 rounded-[8px font13SB`}>
              <Icons.Logout />
              {/* <Image alt='icons' src={getIconSrc('settings', 9)} width={17} height={17} /> */}
              <p className='font13SB text-RED_01'>Logout</p>
            </div>
          </Link>
        </li>
      </ul>
      {/* <div className="flex-grow bg-[#111122] h-screen">
        {activeComponent}
      </div> */}
    </div>
  )
}

export default SideBar