import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createBreadcrumbs } from '@/utils';
import Icons from '@/assets/icon';
import { NextBreadcrumbsProps } from './type';

const NextBreadcrumbs: React.FC<NextBreadcrumbsProps> = ({ activeSubTab }) => {
  const router = useRouter();
  const breadcrumbs = createBreadcrumbs(router.asPath);

  const isSettingsPath = router.asPath.includes('/settings');

  return (
    <nav aria-label="breadcrumb" className="mt-5 mx-5">
      <ol className="breadcrumbs flex items-center gap-2.5 w-full text-GRAY_101 text-sm font-semibold capitalize">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <li className={`breadcrumb-item ${breadcrumb.href ? '' : 'active'} ${isSettingsPath && breadcrumb.name?.toLowerCase() === 'settings' ? 'text-white' : ''}`}>
              {breadcrumb.href ? (
                <Link href={breadcrumb.href}>{breadcrumb.name === "Home" ? <Icons.BreadcrumbsHome /> : breadcrumb.name}</Link>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
            </li>
            {breadcrumbs.length !== (index + 1) && <Icons.RightArrow />}
          </React.Fragment>
        ))}
        {isSettingsPath && activeSubTab && (
          <>
            <Icons.RightArrow />
            <li className="breadcrumb-item active">
              <span>{activeSubTab}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default NextBreadcrumbs;
