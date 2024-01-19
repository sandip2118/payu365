import React from 'react'
import Icons from '@/assets/icon'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE } from '@/Constants';
import { colors } from '../../themes';

const MobileBottomNav = () => {
  const { pathname } = useRouter()
  
  const isActive = (route: string) => {
    
    return pathname.includes(route) ?
    'text-BLUE_201': 
    'text-GRAY_101';
  };

  return (
    <>
      <div className="md:hidden rounded-[16px_16px_0px_0px] fixed bottom-0 left-0 z-50 w-full h-16 border-t-2 bg-BLACK_301 border-GRAY_101">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium items-center justify-between">
          <Link href="/dashboard">
            <div className={`inline-flex flex-col items-center justify-center px-5 group ${isActive(ROUTE.DASHBOARD)}`}>
              <Icons.BreadcrumbsHome color={ROUTE.DASHBOARD === pathname ? colors.BLUE_201 : colors.GRAY_101}/>
              <span className="text-xs">Home</span>
            </div>
          </Link>
          <Link href="/portfolio">
            <div className={`inline-flex flex-col items-center justify-center px-5 group ${isActive(ROUTE.PORTFOLIO)}`}>
              <Icons.Case color={ROUTE.PORTFOLIO === pathname ? colors.BLUE_201 : colors.GRAY_101} />
              <span className="text-xs">Portfolio</span>
            </div>
          </Link>
          <Link href="/market">
            <div className={`inline-flex flex-col items-center justify-center px-5 group ${isActive(ROUTE.MARKET)}`}>
              <Icons.MiniChart color={ROUTE.MARKET === pathname ? colors.BLUE_201 : colors.GRAY_101} />
              <span className="text-xs">Market</span>
            </div>
          </Link>
          <Link href="">
            <div className={`inline-flex flex-col items-center justify-center px-5 group ${isActive(ROUTE.PORTFOLIO)}`}>
              <Icons.Clock color={ROUTE.PORTFOLIO === pathname ? colors.BLUE_201 : colors.GRAY_101} />
              <span className="text-xs">History</span>
            </div>
          </Link>
          <Link href="/settings">
            <div className={`inline-flex flex-col items-center justify-center px-5 group ${isActive(ROUTE.SETTINGS)}`}>
              {/* <Icons.Gear color={ROUTE.SETTINGS === pathname ? colors.BLUE_201 : colors.GRAY_101} /> */}
              <Icons.Gear color={pathname.includes(ROUTE.SETTINGS) ? colors.BLUE_201 : colors.GRAY_101} />
              <span className="text-xs">Settings</span>
            </div>
          </Link>

        </div>
      </div>
    </>
  )
}

export default MobileBottomNav