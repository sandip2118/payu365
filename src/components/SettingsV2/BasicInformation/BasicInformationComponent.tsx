import React from 'react'
import BasicInfoPartOne from './BasicInfoPartOne'
import BasicInfoPartTwo from './BasicInfoPartTwo'
import BasicInfoPartThree from './BasicInfoPartThree'

function BasicInformationComponent() {
  return (
    <div className='grid gap-[35px] md:mx-[20px] mb-[60px] '>
 <BasicInfoPartOne />
 <BasicInfoPartTwo />
<BasicInfoPartThree />
  </div>
  )
}

export default BasicInformationComponent