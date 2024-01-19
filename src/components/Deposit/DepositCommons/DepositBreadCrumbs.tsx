import React from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { DepositBreadCrumbsProps } from '../types';


const DepositBreadCrumbs:React.FC<DepositBreadCrumbsProps> = ({first,second,third}) => {
  const router = useRouter();
  const issDepositPath = router.asPath.includes('/deposit');

  const navigateToRoute = (word) => {
    const stringWithoutSpaces = word.replace(/\s+/g, '');
    const route = stringWithoutSpaces.charAt(0).toLowerCase() + stringWithoutSpaces.slice(1);
  
    router.push(`${route}`);
  };



  return (
    <nav aria-label="breadcrumb" className=" ml-5 mt-5 ">
    <ol className={`breadcrumbs flex items-center gap-2.5 w-full text-GRAY_101 ${third ? ' font12SB md:font14SB':' font13SB md:font14SB'} `}>
      {issDepositPath  && (
        <div className='flex items-center gap-2.5 '>
        <Icons.BreadcrumbsHome color='white' />
         <Icons.RightArrow />
        <div onClick={()=>router.push('/deposit')}>
        <p className={`${first ? 'text-white': ''}`} >Deposit</p>
        </div>
        
    {first ?
    <>
         <Icons.RightArrow />
      <div onClick={()=>navigateToRoute(first)} >
      <li className="breadcrumb-item active">
          <span className={`flex flex-nowrap w-full  ${second ? 'text-white': ''}`}>{first}</span>
      </li>
      </div>
    </>
    :
    null

    }
      {second ?
     <>
     <Icons.RightArrow />
     <div onClick={()=>navigateToRoute(second)} >
     <li className="breadcrumb-item active">
         <span className={`flex flex-nowrap w-full ${third ? 'text-white': ''}`}>{second}</span>
     </li>
     </div>
     </>
     :
     null  
    }
      {third ?
     <>
     <Icons.RightArrow />
     <div onClick={()=>navigateToRoute(third)} >
     <li className="breadcrumb-item active">
         <span>{third}</span>
     </li>
     </div>
     </>
     :
     null  
    }
         
       </div>
      )}
    </ol>
  </nav>
  )
}

export default DepositBreadCrumbs;