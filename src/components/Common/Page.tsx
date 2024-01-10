import React from 'react';
import NextBreadcrumbs from './NextBreadcrumbs';
import Header from '@/components/Header'
import { PageProps } from './type';

const Page: React.FC<PageProps> = ({ title, children, className, isBreadcrumbs, balance }) => (
  <div className={`h-screen w-full overflow-y-auto bg-BLACK_303 text-white ${className}`}>
    <Header title={title} balance={balance} />
    {isBreadcrumbs ? <div className="page-header">
      <NextBreadcrumbs />
    </div>
      : null}
    <div className="page-content">{children}</div>
  </div>
);

export default Page;