import { useRouter } from 'next/router';
import React from 'react';

function AddNweCard({ wording }) {
  const router = useRouter();

  const handleClick = () => {
    if (wording.includes('card')) {
      router.push('cardDetails'); 
    } else if (wording.includes('UPI')) {
      router.push('upiDetails'); 
    } else {
      router.push(''); 
    }
  };

  return (
    <div className='text-BLUE_201 font16SB w-full flex items-center place-content-center mb-[30px]' onClick={handleClick}>
      {wording}
    </div>
  );
}

export default AddNweCard;
