import React, { useState, useRef, ChangeEvent } from 'react';

const EnterOTP = ({ OTP }) => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    OTP(newOtp)
    if (value !== '' && index < otp.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (

    <div className="flex items-center justify-center w-full h-auto">
      {/* Render four OTP input fields */}
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          // className="otp-input w-[50px] sm:h-[50px] sm:w-[60px] h-[60px]  text-center font22SB bg-BLACK_304 text-white rounded-[15px]"
          className="w-[50px] h-[50px] mx-2 text-center bg-BLACK_304 border border-BLUE_201 text-white rounded-[15px]"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { handleInputChange(index, e.target.value) }
          }
        />
      ))}

    </div>

  );
};

export { EnterOTP };
