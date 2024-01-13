import React from 'react'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import PartThree from './PartThree'
import PartFour from './PartFour'

function Security() {
  return (
    <div className='grid gap-[20px] md:mx-[20px] pb-[200px] md:pb-[140px]'>
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </div>
  )
}

export default Security