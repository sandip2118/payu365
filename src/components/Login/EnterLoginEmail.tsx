import React, { useState } from "react";
import ContinueWithEmailorPhone from "./ContinueWithEmailorPhone";
import { EMAIL } from "@/Constants";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PasswordInput from "../Common/PasswordInput";
import InputField from "../Common/InputField";

type EnterLoginEmailProps = {
  onMailClick: (data: string) => void;
  onSubmit: (email: string, password: string) => void;
};

const EnterLoginEmail = (props: EnterLoginEmailProps) => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error('Enter valid email')
      return
    }
    if (!password) {
      toast.error("Enter password")
      return
    }
    e.preventDefault();
    props.onSubmit(email, password);
    router.push('/dashboard')
  };

  const handleMailClick = (data: string) => {
    props.onMailClick(data);
  };
  return (
    <div className="2xl:w-[60%] xl:w-[70%] lg:w-[80%] w-[100%] sm:mx-5 mx-0">
      <div className="flex bg-BLACK_303 md:bg-inherit md:w-full mx-5 sm:mx-0 flex-col items-start md:backdrop-blur-none px-5 py-8 rounded-3xl md:rounded-none">
        <p className="text-[color:var(--Pure-White,#FFF)] text-2xl not-italic font-bold leading-[normal]">
          Hi, Welcome back
        </p>
        <p className="self-stretch mt-[15px] text-[#777E90] text-sm not-italic font-medium leading-[22px]">
          {`You're just a step away from seamless transactions.`}
        </p>

        <div className="w-full sm:mt-[50px] mt-[40px]" >
          <div className="mb-[20px]">
            <label
              htmlFor="email"
              className="block text-[#777E90] text-[12px] font-bold mb-2"
            >
              Email
            </label>
            <InputField
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-[20px]">
            <label
              htmlFor="password"
              className="block text-[#777E90] text-[12px] font-bold mb-2"
            >
              Password
            </label>
            <PasswordInput
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between mt-[10px]">
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="rememberMe" className="text-[12px] text-white">
                  Remember me
                </label>
              </div>
              <button onClick={() => router.push('/forgotPassword')} className="text-xs md:text-sm text-BLUE_201 hover:underline">
                Forgot Password?
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center gap-2.5 self-stretch pt-[15px] pb-4 px-[100px] rounded-[5px] h-[48px]"
            >
              Continue
            </button>
          </div>
        </div>

        <ContinueWithEmailorPhone onClick={handleMailClick} currentSelection={EMAIL} />
      </div>
      <div className='h-5' />

    </div>
  );
};

export { EnterLoginEmail };
