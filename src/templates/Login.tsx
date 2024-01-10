import { useState } from "react";
import LayoutListener from "@/utilities/LayoutListner";
import LoginWithPhone from "@/components/Login/LoginWithPhone";
import { EnterLoginOTP } from "@/components/Login/EnterLoginOTP";
import { EnterLoginEmail } from "@/components/Login/EnterLoginEmail";
import { EMAIL, PHONE } from "@/Constants";


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
      {/* <LayoutListener minWidth={768}>
        <div className="w-full flex">
          <div className="bg-[#000103] w-1/2 h-screen">
            <div className="h-[20%]"></div>
            <div
              style={{
                backgroundImage: "url(/assets/images/nasa.png)",
                backgroundSize: "cover",
              }}
              className={`shrink-0 mix-blend-screen h-[80%]`}
            >
              <div className="flex w-full flex-col items-center gap-8 px-[50px]">
                <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center md:text-4xl lg:text-[55px] not-italic font-extrabold leading-[120.023%]">
                  Step into a world of secure Step nto a world of secure.
                </p>
                <div className="flex items-center gap-2">
                  <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium leading-[22px]">
                    Your journey begins here.
                  </p>
                  <img src="/assets/images/arrow_right.svg" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center bg-[#13131A] h-screen">
            {login === 0 && <LoginWithPhone onClick={handleButtonClick} onMailClick={handleMailClick} />}
            {login === 1 && <EnterLoginOTP onMailClick={handleMailClick} onBackPhone={(e)=> {handleMailClick(e)}}/>}
            {login === 2 && <EnterLoginEmail onMailClick={handleMailClick} onSubmit={handleEmailLoginSubmit} />}

          </div>
        </div>
      </LayoutListener> */}
      {/* <LayoutListener maxWidth={767}>
        <div className="h-screen bg-[#000103]"
        >
          {login === 0 || login === 2 ?
            <div className="flex w-full flex-col items-center px-[30px] pt-[80px] md:hidden sm:block ">
              <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center text-[47px] not-italic font-extrabold leading-[120.023%]">Step into a world of secure transactions.</p>
              <div className="flex items-center mt-[33px]">
                <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium leading-[22px]">
                  Your journey begins here.
                </p>
                <img src="/assets/images/arrow_right.svg" className="w-6 h-6" />
              </div>
            </div>
            : <div className="" />

          }
          <div style={{
            backgroundImage: "url(/assets/images/nasa.png)",
            backgroundSize: "cover",
          }}
            className={`${login === 0 ? 'h-[65%]' : "justify-center"}`}>
            {login === 0 &&
              <div className="mt-[61px] flex justify-center">
                <LoginWithPhone onClick={handleButtonClick} onMailClick={handleMailClick} />

              </div>
            }
            {login === 1 &&
             <div className="flex justify-center h-screen items-center">
                <EnterLoginOTP onMailClick={handleMailClick} onBackPhone={(e)=> {handleMailClick(e)}}/>
              </div>
            }
            {login === 2 &&
              <div className="mt-[61px] flex justify-center">
                <EnterLoginEmail onMailClick={handleMailClick} onSubmit={handleEmailLoginSubmit} />
              </div>
            }
          </div>
        </div>

      </LayoutListener> */}
    </>
  );
};

export { Login };
