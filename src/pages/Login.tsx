import { useState } from 'react';
import LoginWithPhone from './../components/Login/LoginWithPhone';
import { EnterLoginOTP } from './../components/Login/EnterLoginOTP';
import { EnterLoginEmail } from './../components/Login/EnterLoginEmail';
import { EMAIL, PHONE } from './../Constants';


const Login = () => {
  const [login, setLogin] = useState(0);

  const handleButtonClick = (data: string) => {
    setLogin(1);
  };
  const handleMailClick = (data?: string) => {
    if (data === PHONE) {
      setLogin(2);
    }
    if (data === EMAIL) {
      setLogin(0);
    }
  };
  const handleEmailLoginSubmit = () => {

  };

  return (
    <>
      <div className='md:block hidden'>
        <div className="w-full flex">
          <div className="bg-BLACK_302 w-1/2 h-screen">
            <div className="mt-[20%] lg:px-[50px] md:px-[20px] px-[10px] flex">
              <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center md:text-4xl xl:text-[55px] not-italic font-extrabold leading-[120.023%] flex items-end">
                Step into a world of secure transactions
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url(/assets/images/nasa.png)",
                backgroundSize: "cover",
              }}
              className={`h-screen shrink-0 mix-blend-screen w-[50%] fixed lg:-mt-[4%] -mt-[8%]`}
            >
              <div className="flex items-center justify-center lg:mt-[12%] mt-[25%]">
                <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium leading-[22px]">
                  Your journey begins here.
                </p>
                <img src="/assets/images/arrow_right.svg" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center bg-[#13131A] h-screen">
            {login === 0 && <LoginWithPhone onClick={handleButtonClick} onMailClick={handleMailClick} />}
            {login === 1 && <EnterLoginOTP onMailClick={handleMailClick} onBackPhone={(e) => { handleMailClick(e) }} />}
            {login === 2 && <EnterLoginEmail onMailClick={handleMailClick} onSubmit={handleEmailLoginSubmit} />}
          </div>
        </div>
      </div>

      <div className='block md:hidden'>
        <div style={{
          backgroundImage: "url(/assets/images/nasa.png)",
          backgroundSize: "cover",
        }}
          className={`h-screen shrink-0 mix-blend-screen w-[100%] fixed`}
        >
          <div
            className="pt-[7%] overflow-y-auto h-screen">
            <div className="flex flex-col items-center gap-8 px-11 py-0">
              <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center text-[30px] not-italic font-extrabold leading-[120.023%]">
                Step into a world of secure transactions.
              </p>
              <div className="flex items-center gap-2">
                <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium leading-[22px]">
                  Your journey begins here.
                </p>
                <img src="/assets/images/arrow_right.svg" className="h-6 w-6" />
              </div>
            </div>

            <div className='w-[100%]'>
              {login === 0 &&
                <div className="mt-[61px] flex justify-center">
                  <LoginWithPhone onClick={handleButtonClick} onMailClick={handleMailClick} />
                </div>
              }
              {login === 1 &&
                <div className="flex justify-center items-center h-screen overflow-y-auto">
                  <EnterLoginOTP onMailClick={handleMailClick} onBackPhone={(e) => { handleMailClick(e) }} />
                </div>
              }
              {login === 2 &&
                <div className="mt-[61px] flex justify-center">
                  <EnterLoginEmail onMailClick={handleMailClick} onSubmit={handleEmailLoginSubmit} />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
