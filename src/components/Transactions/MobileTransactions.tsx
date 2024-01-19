import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CopyAllRounded from '@mui/icons-material/CopyAllRounded';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import Icons from '@/assets/icon'
import { colors } from '../../themes'
import { MobileTransactionsProps } from './type'

const MobileTransactions: React.FC<MobileTransactionsProps> = ({
  rows,
  onClick,
}) => {
  return (
    <>
      <div className="flex flex-col gap-[30px]">
        <div className="bg-BLACK_301 mt-5 flex flex-col gap-5">
          {rows.map((row: any) => (
            <div className="pb-4 border-b border-GRAY_101 flex flex-col items-start gap-3">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[7px]">
                  <div className="flex items-center justify-center">
                    <PersonIcon fontSize="large" color="orange" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-sm font-medium">{row.Name}</p>
                    <p className="text-GRAY_101 text-xs mt-0 font-medium">
                      {row.Method}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Menu
                    transition
                    menuStyle={{ borderRadius: '7px' }}
                    menuButton={
                      <MenuButton>
                        <div className="flex">
                          <Icons.VerticalMore />
                        </div>
                      </MenuButton>
                    }
                  >
                    <div className="bg-BLACK_304 cursor-pointer rounded-[7px] w-full pt-5 pb-2.5">
                      <MenuItem
                        className="px-6 py-[15px] flex items-center w-max"
                        onClick={onClick}
                      >
                        <Icons.List color={colors.GRAY_101} />
                        <p className="text-[13px] font-medium text-GRAY_101 ml-[15px] w-full">
                          View Details
                        </p>
                      </MenuItem>
                      <MenuItem
                        className="px-6 py-[15px] flex items-center w-max"
                        onClick={onClick}
                      >
                        <Icons.Receiver color={colors.GRAY_101} />
                        <p className="text-[13px] font-medium text-GRAY_101 ml-[15px]">
                          Contact for Query
                        </p>
                      </MenuItem>
                      <MenuItem
                        className="px-6 py-[15px] flex items-center w-max"
                        onClick={onClick}
                      >
                        <Icons.Download color={colors.GRAY_101} />
                        <p className="text-[13px] font-medium text-GRAY_101 ml-[15px]">
                          Download Receipt
                        </p>
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              </div>
              <div className="w-full justify-between flex">
                <div className="flex flex-col gap-1.5">
                  <p className="text-GRAY_101 text-xs font-medium">
                    Transaction ID
                  </p>
                  <div className="flex gap-1 items-center">
                    <p className="text-white text-right text-sm font-medium">
                      {row.Transaction}
                    </p>
                    <div className="w-[17px] h-[17px] bg-BLACK_304 rounded-full flex items-center justify-center p-2.5">
                      <CopyAllRounded
                        fontSize="1"
                        color="secondary"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-GRAY_101 text-xs font-medium">
                    Date & Time
                  </p>
                  <div className="flex gap-1 items-center">
                    <p className="text-white text-right text-sm font-medium">
                      {`${row.Date} | ${row.Time}`}
                    </p>
                    <div className="w-[17px] h-[17px] bg-BLACK_304 rounded-full flex items-center justify-center p-2.5">
                      <CopyAllRounded
                        fontSize="1"
                        color="secondary"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-between flex">
                <p
                  className={`flex text-sm font-medium items-center 
                  ${row.status === 'Success' && 'text-GREEN_01'} 
                  ${row.status === 'Warning' && 'text-YELLOW_01'}
                  ${row.status === 'Danger' && 'text-RED_02'}`}
                >
                  {row.Amount}
                </p>
                <p
                  className={`flex text-sm font-medium items-center 
                  ${row.TXStatus === 'Completed' && 'text-GREEN_01'} 
                  ${row.TXStatus === 'Pending' && 'text-YELLOW_01'}
                  ${row.TXStatus === 'Failed' && 'text-RED_02'}`}
                >
                  {row.TXStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileTransactions
