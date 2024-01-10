import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Icons from '@/assets/icon';
import { colors } from './../../themes';
import { AppContext } from "@/context/AppProvider";

interface HeaderProps {
  title?: string,
  balance?: string
}


const Header: FC<HeaderProps> = ({ title, balance }) => {
  const context = useContext(AppContext);

  const [selLang, setSelLang] = useState<string | undefined>()

  const arr = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Gujarati' },
  ]

  const _handleLng = (val: any | undefined) => {
    setSelLang(val.name)
  }

  useEffect(() => {
    setSelLang(arr?.[0]?.name)
  }, [])

  const RenderMenuBtn = () => {
    return (
      <MenuButton
        className="relative"
        onClick={() => { }}
      >
        <div className="flex bg-BLACK_304 w-[137px] h-[30px] px-3 rounded-lg justify-between items-center">
          <p className="font14R text-white">
            {selLang}
          </p>
          <Icons.DownArrow color={colors.white} />
        </div>
      </MenuButton>
    );
  };

  console.log('title', title);

  return (
    <>
      <div className='flex md:hidden justify-between h-[70px] items-center px-5 bg-BLACK_301 sticky top-0 border-b border-[#292932] z-50'>
        <button onClick={() => {
          context?.setSidebarOpen(!context?.sidebarOpen)
        }}
        >
          <Icons.Menu />
        </button>
        <div className='flex h-[48px] items-center my-[20px]'>
          <Icons.Logo />
        </div>
        <Icons.Setting />
      </div>
      <div className='md:flex hidden justify-between h-[70px] items-center px-5 bg-BLACK_301 sticky top-0 z-10 border-b border-[#292932]'>
        <p className='font-[600] text-[22px] text-white'>{title}</p>
        <div className='flex items-center gap-[10px]'>
          <p className='font14R text-GRAY_101'>
            {title === 'Withdraw' ? 'Balance' : 'Language'}:
          </p>
          {balance ?
            <p className="font16SMB text-white">{balance}</p>
            :
            <Menu
              transition
              menuStyle={{ borderRadius: '7px' }}
              menuButton={RenderMenuBtn()}
            >
              {arr?.map((d, i) => {
                return (
                  <MenuItem className="!p-0" key={i}>
                    <div className="rounded-[4px] bg-BLACK_301 w-[137px] cursor-pointer">
                      <div className="py-[5px] px-3"
                        onClick={() => _handleLng(d)}
                      >
                        <p className="font14R text-white">
                          {d?.name}
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                )
              })}
            </Menu>
          }
          <div className="flex mx-5 w-[30px] h-[30px] rounded-lg bg-BLACK_304 justify-center items-center"><Icons.Notif /></div>
          <div><Image alt='img' src='/assets/images/profile.png' width={30} height={30} className='rounded-full' /></div>
        </div>
      </div>
    </>
  )
}
export default Header