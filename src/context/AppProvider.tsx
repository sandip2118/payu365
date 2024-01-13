import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SideBar from '@/components/Sidebar'
import Login from '@/pages/Login';

export const AppContext = createContext()

const AppProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter()

  // useEffect(() => {
  //   router.push('/')
  // }, [])

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        mobileMenuOpen,
        setMobileMenuOpen
      }}
    >
      <ToastContainer />

      <div className="flex h-screen w-full overflow-hidden">
        {/* {pathname !== "/auth/signin" && (
    )} */}
        {router.pathname !== '/' &&
          router.pathname !== '/Login' &&
          router.pathname !== '/signup' &&
          router.pathname !== '/forgotPassword' &&
          (
          <div>
            <SideBar
            // sidebarOpen={sidebarOpen}
            // setSidebarOpen={setSidebarOpen}
            />
           </div>
          )}
        <div className="h-screen w-full">
          {router.pathname === '/' ? <Login /> : <>{children}</>}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default AppProvider
