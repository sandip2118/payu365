import { SignupForm } from './../components/Signup/SignupForm'

const SignUp = () => {
  const handleSignupFormSubmit = () => { }

  return (
    <>
      <div className='md:block hidden bg-BLACK_303'>
        <div className="flex w-full">
          <div className="bg-BLACK_302 w-1/2 h-screen">
            <div className="mt-[20%] lg:px-[50px] md:px-[20px] px-[10px] flex">
              <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center md:text-4xl xl:text-[55px] not-italic font-extrabold !leading-[120.023%] flex items-end">
                Step into a world of secure transactions
              </p>
            </div>
            <div
              style={{
                backgroundImage: 'url(/assets/images/nasaSignup.png)',
                backgroundSize: 'cover',
              }}
              className={`h-screen shrink-0 mix-blend-screen w-[50%] fixed lg:-mt-[4%] -mt-[8%]`}
            >
              <div className="flex items-center justify-center lg:mt-[12%] mt-[25%]">
                <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium !leading-[22px]">
                  Engrave your mark on your wallet
                </p>
                <img src="/assets/images/arrow_right.svg" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex w-1/2  justify-center bg-[#13131A] overflow-y-auto">
            <SignupForm onSubmit={handleSignupFormSubmit} />
          </div>
        </div>
      </div>
      <div className='block md:hidden'>
        <div style={{
          backgroundImage: "url(/assets/images/nasaSignup.png)",
          backgroundSize: "cover",
        }}
          className={`h-screen shrink-0 mix-blend-screen w-[100%] fixed`}
        >
          <div
            className="pt-[7%] overflow-y-auto h-screen">
            <div className="flex flex-col items-center gap-8 px-9 py-0">
              <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-center text-[30px] not-italic font-extrabold !leading-[120.023%]">
                One step closer to smooth transactions
              </p>
              <div className="flex items-center gap-2">
                <p className="overflow-hidden text-[color:var(--Pure-White,#FFF)] text-ellipsis text-sm not-italic font-medium !leading-[22px]">
                  Engrave your mark on your wallet
                </p>
                <img src="/assets/images/arrow_right.svg" className="h-6 w-6" />
              </div>
            </div>

            <div className='w-[100%]'>
              <SignupForm onSubmit={handleSignupFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
