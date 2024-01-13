import React from 'react';

const Skeleton = ({ className }: any) => {
  return (
    <div role="status" className="animate-pulse">
      <div className={`${className}`} />
    </div>
  )
}
export default Skeleton;
