import Image from 'next/image';
import React, { useState, ReactElement, useContext, useEffect } from 'react';
import Icons from './../../assets/icon'
import Link from 'next/link';
import { AppContext } from '@/context/AppProvider';
import { colors } from '../../themes';
import { useRouter } from 'next/router';
import { ROUTE } from '@/Constants';
import Index from '@/pages/deposit/cardDetails';

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

const TransferMenu = [
  { id: 1, title: 'Wallet to Wallet', route: ROUTE.WALLET_TO_WALLET },
  { id: 2, title: 'Insta Transfer', route: ROUTE.INSTA_TRANSFER },
  { id: 3, title: 'Money Transfer', route: ROUTE.MONEY_TRANSFER },
  { id: 4, title: 'Request Payment', route: ROUTE.REQUEST_PAYMENT },
]

function SideBar() {
  const { pathname } = useRouter()

  const context = useContext(AppContext)
  const [activeComponent, setActiveComponent] = useState<ReactElement | null>(<Item1Component />);
  const [activeItemId, setActiveItemId] = useState<number>(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    switch (true) {
      case pathname === ROUTE.WALLET_TO_WALLET:
        return setOpen(true)
      case pathname === ROUTE.INSTA_TRANSFER:
        return setOpen(true)
      case pathname === ROUTE.MONEY_TRANSFER:
        return setOpen(true)
      case pathname === ROUTE.REQUEST_PAYMENT:
        return setOpen(true)
    }
  }), []

  const handleMenuClick = (component: ReactElement, itemId: number) => () => {
    // context?.setSidebarOpen(!context.sidebarOpen)
    setActiveComponent(component);
    setActiveItemId(itemId);
  };
  const router = useRouter();
  const isSettingsPath = router.asPath.includes('/settings');

  const isActive = (route: string) => {
    return pathname.includes(route) ?
      'bg-BLUE_201 text-BLUE_201 border-BLUE_201 rounded-[8px] text-white font13SB' :
      'text-GRAY_101';
  };

  const getIconSrc = (iconName: string, itemId: number) => {
    return activeItemId === itemId ? `/assets/icons/${iconName}-active.svg` : `/assets/icons/${iconName}-inactive.svg`;
  };

  const handleTransfer = (val) => {
    setOpen(val)
  };

  return (
    // <div className={`${!context.sidebarOpen ? 'md:block hidden' : 'block md:hidden'} bg-BLACK_301 relative h-[100%] border-r border-[#292932]`}>
    <div className={`${!context.sidebarOpen ? (isSettingsPath ? 'lg:block hidden' : 'md:block hidden') : (isSettingsPath ? 'block lg:hidden' : 'block md:hidden')} bg-BLACK_301 relative h-[100vh] border-r border-BLACK_304`}>
      <ul className={`sidebar-ui menu w-56 rounded-box font-[600] pl-[10px] pr-[16px] overflow-y-auto h-[calc(100%-50px)] `}>
        <div className='flex h-[48px] items-center my-[20px]'>
          <Icons.Logo />
        </div>
        <li onClick={handleMenuClick(<Item1Component />, 1)}>
          <Link href="/dashboard">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.DASHBOARD)}`}>
              <Icons.Dashboard color={ROUTE.DASHBOARD === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Dashboard</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item2Component />, 2)}>
          <Link href="/portfolio">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.PORTFOLIO)}`}>
              <Icons.Portfolio color={ROUTE.PORTFOLIO === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Portfolio</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item3Component />, 3)}>
          <Link href="/market">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.MARKET)}`}>
              <Icons.Market color={ROUTE.MARKET === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Market</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item4Component />, 4)}>
          <Link href="/transactions">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.TRANSACTIONS)}`}>
              <Icons.Transactions color={ROUTE.TRANSACTIONS === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Transactions</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item5Component />, 5)}>
          <Link href="/deposit">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.DEPOSIT)}`}>
              {/* <Icons.Deposit color={ROUTE.DEPOSIT === pathname ? colors.white : colors.GRAY_101} /> */}
              <Icons.Deposit color={pathname.includes(ROUTE.DEPOSIT) ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Deposit</p>
            </div>
          </Link>
        </li>
        <li onClick={() => handleTransfer(!open)}>
          <div className={`flex items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] justify-between ${isActive(ROUTE.TRANSFER)}`}>
            <div className='flex gap-[15px]'>
              <Icons.Transfer color={ROUTE.TRANSFER === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Transfer</p>
            </div>
            <Icons.DownArrow color={colors.GRAY_101} className={` ${open ? 'rotate-180' : 'rotate-0'}`} />
          </div>
        </li>

        {open &&
          <>
            {TransferMenu?.map((d, i) => {
              return (
                <li className='ml-[10px]'>
                  <Link href={d.route}>
                    <div className={`flex items-center h-[40px] pr-[16px] `}>
                      <div className='relative justify-center items-center flex flex-col mx-[10px]'>
                        <div className={` ${i !== 0 ? 'bg-GRAY_101' : 'bg-[transparent]'} h-[20px] w-[1px] bg-GRAY_101`} />
                        <div className={` ${pathname === d.route ? 'bg-white' : 'bg-GRAY_101'} w-[6px] h-[6px] rounded-full absolute`} />
                        <div className={` ${i !== 3 ? 'bg-GRAY_101' : 'bg-[transparent]'} h-[20px] w-[1px] bg-GRAY_101`} />
                      </div>
                      <p className={` ${pathname === d.route ? 'text-white' : 'text-GRAY_101'} font13SB ml-[10px]`}>{d.title}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </>
        }
        <li onClick={handleMenuClick(<Item7Component />, 7)}>
          <Link href="/addressBook">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] my-[10px] ${isActive(ROUTE.ADDRESS_BOOK)}`}>
              <Icons.AddressBook color={ROUTE.ADDRESS_BOOK === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Address Book</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item8Component />, 8)}>
          <Link href="/withdraw">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.WITHDROW)}`}>
              <Icons.Withdraw color={ROUTE.WITHDROW === pathname ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Withdraw</p>
            </div>
          </Link>
        </li>
        <li onClick={handleMenuClick(<Item9Component />, 9)}>
          <Link href="/settings">
            <div className={`flex gap-[15px] items-center h-[37px] pl-[10px] pr-[16px] mb-[10px] ${isActive(ROUTE.SETTINGS)}`}>
              {/* <Icons.Settings color={ROUTE.SETTINGS === pathname ? colors.white : colors.GRAY_101} /> */}
              <Icons.Settings color={pathname.includes(ROUTE.SETTINGS) ? colors.white : colors.GRAY_101} />
              <p className='font13SB'>Settings</p>
            </div>
          </Link>
        </li>
      </ul>
      <ul className={`sidebar-ui menu w-56 rounded-box font-[600] px-3 border-r border-BLACK_304 absolute bottom-0`}>
        <li>
          <Link href="/Login">
            <div className={`flex gap-[15px] items-center h-[57px] px-3 bg-BLACK_301 rounded-[8px font13SB`}>
              <Icons.Logout />
              <p className='font13SB text-RED_01'>Logout</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;