import React from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { SecurityBreadCrumbsProps } from '../types';


const Securitybreadcrumbs:React.FC<SecurityBreadCrumbsProps> = ({ activeSubTab ,title}) => {
  const router = useRouter();

  const isSettingsPath = router.asPath.includes('/settings');

  return (
    <nav aria-label="breadcrumb" className="mt-5 mx-5">
    <ol className="breadcrumbs flex items-center gap-2.5 w-full text-GRAY_101 text-sm font-semibold capitalize">
      {isSettingsPath && activeSubTab && (
        <>
        <Icons.BreadcrumbsHome />
        <p className='text-white'>Settings</p>
      
        
         <Icons.RightArrow />
         <li className="breadcrumb-item active">
            <span>{activeSubTab}</span>
          </li>
         
       </>
      )}
    </ol>
  </nav>
  )
}

export default Securitybreadcrumbs