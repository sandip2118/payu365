import Payment from 'payment'
import { useEffect, useState } from 'react'

function clearNumber(value = '') {
  return value.replace(/\D+/g, '')
}

export function formatCreditCardNumber(value: any) {
  if (!value) {
    return value
  }

  const issuer = Payment.fns.cardType(value)
  const clearValue = clearNumber(value)
  let nextValue

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`
      break
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`
      break
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`
      break
  }

  return nextValue.trim()
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value)
  let maxLength = 3

  if (allValues?.number) {
    const issuer = Payment.fns.cardType(allValues?.number)
  }

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate(value: any) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}

interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}

export const countries: readonly CountryType[] = [

]

export const createBreadcrumbs = (pathname: string) => {
  const breadcrumbs = []
  const pathArr = pathname.split('/').filter(Boolean)

  let fullPath = '/'
  breadcrumbs.push({ name: 'Home', href: fullPath })

  for (let i = 0; i < pathArr.length; i++) {
    fullPath += pathArr[i] + '/'
    const href = fullPath === '/' ? fullPath : fullPath.slice(0, -1)
    breadcrumbs.push({ name: pathArr[i], href })
  }

  return breadcrumbs
}
