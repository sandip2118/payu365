/* eslint-disable complexity */
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

function Deposit() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-BLACK_303 text-white" onClick={() => router.push('/portfolio')}>
    </div>
  );
}

export default Deposit;
