import { Card } from '@mui/material'
import React from 'react'
import { TableCardProps } from '../common/type'

const TableRowCard: React.FC<TableCardProps> = ({ children }) => {
  return (
    <>
      <Card className='bg-BLACK_304 rounded-t-[11px] w-full'>{children}</Card>
    </>
  )
}

export default TableRowCard