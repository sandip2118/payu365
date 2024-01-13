/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BottomSpace from '../../Common/BottomSpace'
import Page from '../../Common/Page';

function Wrapper({ title }: any) {
  const router = useRouter()
  return (
    <Page title={title}>
      <p>InstaTransfer</p>
    </Page >
  )
}

export default Wrapper
