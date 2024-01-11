/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../Common/Card'
import Icons from '@/assets/icon';
import { colors } from './../../themes';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import PhoneWithCountryCode from '../Login/PhoneWithCountryCode';
import CurrencyInfo from '../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from '../Common/InputField';
import { toast } from 'react-toastify';
interface prop {
  onClick?: () => void
}

const currency = {
  "id": 98,
  "name": "India",
  "isoAlpha2": "IN",
  "isoAlpha3": "IND",
  "isoNumeric": 356,
  "currency": {
    "code": "INR",
    "name": "Rupee",
    "symbol": "₹"
  },
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
}

const bank = {
  "id": 1,
  "name": "Bank of Canada",
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REQwQzQwNjE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REQwQzQwNzE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA0MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdERDBDNDA1MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+duaIkQAAAalJREFUeNpiZMAN2BkYVjMwyDIwfMCQ4mNgeM3K4DEFj24GJgaagaFpNAuR6v4yMPwDO4SRaOcQZfQfBgZOCQkOSclfb978/fbt59u3/6li9G+guTIy/EZGTOycbDJyrIIC3+7e/XX0CMgXZIc1I9hcPnstsbzA94ePfH/x+N//n683b+ILNBGw0v3zlwKjIYErGub94dhpJi5u3Q1rtFcuZeYTerNtj3CwJxMjBQECdBaXoRybhCzLFy6eQJuHPW1/P30W9Db9fuMlh6QSt706A8NNMl0NNJpNVIrHyIyDR/DV4UOMivxf3tx/vnM7p4gor5kFh7gs+QEC9NG38ze+3jz7m+Mrv6i2oKGtTGo6v7jOr3/vP1878fXcNfIDBCj39fWHdyt2K/Q3vpy05FFWCwMTE6+NrnhR3PvyCZ9vP6Mo8bEyMLxZsOkTD4tkaga/vvXvt285rdSeT5n1dckaFkrS9X+w9F+Gf8+nrPl9+Q2LkMD/f//+rd/4es8ePoZ/LKyUZZn/YIczMzC8PHgALsgGFvxPeW78D8477BiCw7RQpaHRAAEGAEWfj+c8VB1nAAAAAElFTkSuQmCC"
}

function AddNewBank({ onClick }: prop) {
  const router = useRouter();
  const [radioSelect, setRadioSelect] = useState('Saving')
  const [selecteCurrency, setSelecteCurrency] = useState<any>(currency);
  const [selecteBank, setSelecteBank] = useState<any>(bank);
  const [acHolderName, setAcHolderName] = useState('');
  const [phone, setPhone] = useState('')
  const [phoneCode, setPhoneCode] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [accountAccountNo, setAccountAccountNo] = useState('')
  const [ifscCode, setIfscCode] = useState('')
  const [branchName, setBranchName] = useState('')

  const arr = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Gujarati' },
  ]
  const arrBank = [
    {
      "id": 1,
      "name": "Bank of Canada",
      "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REQwQzQwNjE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REQwQzQwNzE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA0MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdERDBDNDA1MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+duaIkQAAAalJREFUeNpiZMAN2BkYVjMwyDIwfMCQ4mNgeM3K4DEFj24GJgaagaFpNAuR6v4yMPwDO4SRaOcQZfQfBgZOCQkOSclfb978/fbt59u3/6li9G+guTIy/EZGTOycbDJyrIIC3+7e/XX0CMgXZIc1I9hcPnstsbzA94ePfH/x+N//n683b+ILNBGw0v3zlwKjIYErGub94dhpJi5u3Q1rtFcuZeYTerNtj3CwJxMjBQECdBaXoRybhCzLFy6eQJuHPW1/P30W9Db9fuMlh6QSt706A8NNMl0NNJpNVIrHyIyDR/DV4UOMivxf3tx/vnM7p4gor5kFh7gs+QEC9NG38ze+3jz7m+Mrv6i2oKGtTGo6v7jOr3/vP1878fXcNfIDBCj39fWHdyt2K/Q3vpy05FFWCwMTE6+NrnhR3PvyCZ9vP6Mo8bEyMLxZsOkTD4tkaga/vvXvt285rdSeT5n1dckaFkrS9X+w9F+Gf8+nrPl9+Q2LkMD/f//+rd/4es8ePoZ/LKyUZZn/YIczMzC8PHgALsgGFvxPeW78D8477BiCw7RQpaHRAAEGAEWfj+c8VB1nAAAAAElFTkSuQmCC"
    },
    {
      "id": 2,
      "name": "Bank of India",
      "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
    },
    {
      "id": 3,
      "name": "Bank of Australia",
      "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0RDE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0RTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJEMUFEMjRCMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJEMUFEMjRDMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+O7eQxAAAAhJJREFUeNrslD9oE1Ecx7/v7l2TXpLGWNrGioJDO4ogLkJBhA6iFDpUOhc6ODiKBUWcBJ1bKLaCIIJOjl0ypDh1rFDQyUH6R1HitaRpcvfu+X0XHWp6TWkCGdof3D3evR/3+f35vp/AtafrADI4yLQGlEZ+oAdCCGxtedC2ADeNvnYXUv4uCl8LOM/1N/eHmeQz2PDV/FcZaAjx3cP7V1PIppO4OvoCyk0AFh3SXEON45oB7+zL+F82P7frSfem8eRlEUnHRki4m3MhCN4t16CNrzg+eL8FCsKr4NHMbfhBiOezBSwvfWIEiCrw+MEtjFy5iJsTc/BTLKcj2wSmWQRcHsqjsudDVJhZf0/9YL2Etwzi4+o3BC6h0m6p1P+JxILKZ3H3/puo2WIwBxAuux3cm7mD+XcrWCt+Bi71RRVoHxj1kiLhRCLSvgJKZQRlibUvm3CZqXcu2xI0HmyMYgKh3Wzu5PQNmFu0uLBMNSdbVnQdbDvxpzWNih/i2cMxnKXb6w+rCKoBO8B47cZ7XFZ+pMGjCF06QTX+lPqxQoXxqXkkuiSkqkEkLSq/euCwSalqBD1KE0Sx9/p27OTiPdXs88YPD4q5XOg7A2GmmW4sszZC5DvH4Cyuuknecqi20zS64czfcbbnxTuZeOhSshPM2IqCOBT8i47ttmbQaFagQ3YKPhngTCfAZlZvdAL+R4ABAI7lqpHANxKvAAAAAElFTkSuQmCC"
    },
    {
      "id": 4,
      "name": "Bank of American",
      "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REQwQzQwNjE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REQwQzQwNzE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA0MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdERDBDNDA1MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+duaIkQAAAalJREFUeNpiZMAN2BkYVjMwyDIwfMCQ4mNgeM3K4DEFj24GJgaagaFpNAuR6v4yMPwDO4SRaOcQZfQfBgZOCQkOSclfb978/fbt59u3/6li9G+guTIy/EZGTOycbDJyrIIC3+7e/XX0CMgXZIc1I9hcPnstsbzA94ePfH/x+N//n683b+ILNBGw0v3zlwKjIYErGub94dhpJi5u3Q1rtFcuZeYTerNtj3CwJxMjBQECdBaXoRybhCzLFy6eQJuHPW1/P30W9Db9fuMlh6QSt706A8NNMl0NNJpNVIrHyIyDR/DV4UOMivxf3tx/vnM7p4gor5kFh7gs+QEC9NG38ze+3jz7m+Mrv6i2oKGtTGo6v7jOr3/vP1878fXcNfIDBCj39fWHdyt2K/Q3vpy05FFWCwMTE6+NrnhR3PvyCZ9vP6Mo8bEyMLxZsOkTD4tkaga/vvXvt285rdSeT5n1dckaFkrS9X+w9F+Gf8+nrPl9+Q2LkMD/f//+rd/4es8ePoZ/LKyUZZn/YIczMzC8PHgALsgGFvxPeW78D8477BiCw7RQpaHRAAEGAEWfj+c8VB1nAAAAAElFTkSuQmCC"
    },
    {
      "id": 5,
      "name": "Bank of Brazil",
      "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDhGOEMxMTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDhGOEMxMjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEOEY4QzBGMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEOEY4QzEwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TFbakQAABKdJREFUeNq8ll1sU2UYx3+n7en6uZVa1oGDwtYxnCw0EhiCxjgjH14oiV6Ampj4GRONRpQ4ZZEYvTAhwSxGjRFilO2GDy8gZuEGTAS2xUHmBvuAuVG70U0o++ranq6tz2mHc8YB48KTnL7pec/7/p////k/z3kV6h4ZAJz8v9e4SX4Wz3uZkoGEFWQgL343wE6Djj4vwJTEOpHPA64/qXIPw6Qj90yfmwdjw529N72pDjJlYufybloD52gKnOfDkk55ZpQ55+x3b8dBcjx2yxzrTJJmiFtYt2CIH9adY0VJCq5PY3ggeEXhueY1/HK9SKRPgFnujHJLxnMD64D6YmFpMCX4pOQSNRuvQKeRfYeqaOv2kpa4K/3DvPd0CwQ09p1ZQs3lMhJJG1gnwJCeK4A5gLPmsWSZbiocoK60i/LKGCe/9/HMru1Eki5MJNG3TGLGbR6j/tMjbHmpm76OPN7qXcmxcDGoU6JA7L/Ax41sXVaje3OGpeQr6qTAEqOu7AKf+3vw+KY4edBF9c7XUdIKRWoILX0VG2N4raPEkk72n6ii2tdD4OEIO8xDlNjHOT1ewGS0AEzJHHv+DkCbYayDxkWitIEdi4LsW96F1y4Ri2K4TRxsq+NseDXL3EFsihOTptLRc4X2kyEutPZzjWKqK4Y40XAAY1L2kvgjk0Z29pfz3eDSHKg1epP9DGNFSmKVbYKvy9rZXdKPQ0mTEJWMLujtdPPlkScYutjDxeYQkXCUPNWE11/A5h2VrKpeQrhjkKZujSfX9LO4YpK4mM9pzrCtSMrOHuGikBrWLGRydaSZssOUSrGq0bT6LPYFZB0bE2UMEpySD6FwHocOt4mBY7icZnpbhvkx+SsWye8Kv5fHX72f3Q1bqf8mTGjwOGt0frI2Jua2agi3CJtdzfhbH6JPwHXpc8DGKa6mjGzqWEvtkl62FEawSlrisghpTIWuKL4FThxWG+lUFNVqodCejyqsB4IR9u5qJFDp5/nabWzwecgMhciI2lapQomNU0EXe4KlhISgjqVfhpummjKmODPiYetvVbzSeR/jkmuL9AvxD+WrR6RsBgjd8OB2W9CSKWFkkFvBas9j+T0uLrRbOFa7n4X2ThTJr742LuBvdpXzaNt6fr5RSFI32HSHm+lcmenkSwP49o9Syls30jDozXrCKMO7LzQyGosRDOfjcJjErfHsnZ9vImNeKkG4eefln6BA9BUdj4YXslL2+KJ/hbDWcnv/45pdTjqKHpGAT4gZjg4V0x6zUpUeIfDYCGvdA9QfLyU46mE8qnJtTCUkKtnUNF99cICnXuxhsE/lte4Kai9XMJoSne0T0yxn1bJ2684lchNziIMn2VvWwxsPSu7OW/i4YT0dl4qkYyqU+8LUbG/CsSHG/pZFvN21komEHWzC0JCaZ+f6dwCaCJLIo9ozSP36cxRJUyI83asXwY2r8OzZAI3D94qsydyn8q579Rx9WzoHe3yX+cjfl5367Hcf7/eXSe+UMrHpsqZvBzoP4FlfKjV7CNjoDaHK/1Pig+zXSPrAHQDOOoHc+bFH39gkdaiOcfq6N2cYneXNuXmcQP4SYAD5sNLFPECeSAAAAABJRU5ErkJggg=="
    },
  ]

  const RadioArr = [
    { title: 'Saving' },
    { title: 'Salary' },
    { title: 'Current' },
  ]


  const handleClick = () => {
    switch (true) {
      case !selecteCurrency:
        return toast.error('Select bank currency')
      case !selecteBank:
        return toast.error('Enter bank')
      case !acHolderName:
        return toast.error('Enter account holder name')
      case phone?.length <= 9:
        return toast.error('Please Enter valid phone number')
      case !accountNo:
        return toast.error('Enter account number')
      case !accountAccountNo:
        return toast.error('Enter confirm account number')
      case accountNo !== accountAccountNo:
        return toast.error('Your account number does not match with confirm account number')
      case !branchName:
        return toast.error('Enter branch name')
    }
    toast.success('Add bank details successfully')
    onClick && onClick(2)
  }


  return (
    <>
      <div className='mb-5'>
        <Card>
          <p className='font18SB'>Country Location of Bank</p>
          <p className='font12RB text-GRAY_101 mt-[10px]'>Select your bank location’s country name.</p>

          <div className='w-full sm:flex block gap-5 mt-[30px] '>
            <div className='w-full mb-[10px] sm:mb-0'>
              <p className="font12RB text-GRAY_101 mb-[10px]">
                Bank Country *
              </p>
              <div className='relative'>
                <CurrencyInfo
                  bank
                  width={'w-full'}
                  country={selecteCurrency} onSelect={(val) => setSelecteCurrency(val)}
                  menuStyle='w-[220px]'
                  RenderMenuBtn={
                    <div className="flex bg-BLACK_304 h-[48px] px-5 rounded-[5px] justify-between items-center">
                      <div className='flex gap-5'>
                        <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} />
                        <p className="font14R text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] mr-1">
                          {selecteCurrency?.name}
                        </p>
                      </div>
                      <Icons.DownArrow />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font12RB text-GRAY_101 mb-[10px]">
                Currency
              </p>
              <InputField
                disabled
                placeholder={`(${selecteCurrency?.currency?.symbol}) ${selecteCurrency?.currency?.code}`}
              />

            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <p className='font18SB'>Enter Account Details</p>
          <p className='font12RB text-GRAY_101 mt-[10px]'>Add your account information for withdrawal balance</p>
          <div className='w-full mt-[30px] mb-[20px] relative z-50'>
            <p className="font12RB text-GRAY_101 mb-[10px]">
              Bank Name *
            </p>
            <Menu
              transition
              menuStyle={{ borderRadius: '7px' }}
              menuButton={<MenuButton
                className="relative w-full"
                onClick={() => { }}
              >
                <div className="flex bg-BLACK_304 h-[48px] px-5 rounded-[5px] justify-between items-center">
                  <div className='flex gap-5'>
                    <img src={selecteBank.flag} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                    <p className="font14R text-white">
                      {selecteBank.name}
                    </p>
                  </div>
                  <Icons.DownArrow color={colors.white} />
                </div>
              </MenuButton>}
            >
              <div className={` overflow-auto max-h-[445px] rounded-[4px] bg-BLACK_306 cursor-pointer px-7 py-2 `}>
                <MenuItem className="!p-0 w-[218px] " >
                  {arrBank?.map((d, i) => {
                    return (
                      <div key={i} className='flex py-[10px] gap-5'
                        onClick={() => setSelecteBank(d)}
                      >
                        <img src={d.flag} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                        <p className="font14R text-white">
                          {d.name}
                        </p>
                      </div>
                    )
                  })}
                </MenuItem>
              </div>
            </Menu>
          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Account Holder Name* <span className='text-GRAY_101'> (As per Bank Records)</span>
            </p>
            <InputField
              placeholder="Ex: Jhon Smith"
              value={acHolderName}
              onChange={(e) => setAcHolderName(e.target.value)}
            />
          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white mb-[10px]">
              Mobile Number* <span className='text-GRAY_101'> (As per Bank Records)</span>
            </p>

            <PhoneWithCountryCode
              value={phone}
              onChange={(e) => {
                setPhoneCode(e?.phoneCode)
                setPhone(e?.value)
              }}
            />
          </div>

          <div className='sm:flex block gap-5 mb-[20px]'>
            <div className="w-full mb-[20px] sm:mb-0">
              <p className="font12RB text-white mb-[10px]">
                Account No *
              </p>
              <InputField
                type="number"
                placeholder="Ex: 1234567890"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="font12RB text-white  mb-[10px]">
                Confirm Account No*
              </p>
              <InputField
                type="number"
                placeholder="Ex: 1234567890"
                value={accountAccountNo}
                onChange={(e) => setAccountAccountNo(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Swift / IFSC Code
            </p>
            <InputField
              type="number"
              placeholder="Ex: 1234567890"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </div>

          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Branch Name *
            </p>
            <InputField
              placeholder="Texas Branch"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />

          </div>
          <div className="w-full mb-[20px]">
            <p className="font12RB text-white  mb-[10px]">
              Account Type
            </p>
            <div className='flex grid-cols-3 justify-between'>
              {RadioArr?.map((d, i) => {
                return (
                  <div key={i} onClick={() => setRadioSelect(d?.title)}
                    className='flex items-center gap-[10px]'
                  >
                    {radioSelect === d?.title ?
                      <Icons.CheckFill />
                      :
                      <div className='w-[19px] h-[19px] rounded-full border-2 border-BLACK_306' />
                    }
                    <p className='font14R'>{d?.title}</p>
                  </div>

                )
              })}
            </div>
          </div>
          <div>
            <button
              onClick={handleClick}
              // onClick={() => onClick && onClick(2)}
              className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
            >
              Submit Details
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddNewBank;
