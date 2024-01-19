/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../../Common/Card'
import Icons from '@/assets/icon';
import { colors } from '../../../../themes';
import InputField from '../../../Common/InputField';
import { toast } from 'react-toastify';
import { Box, Dialog, MenuItem, Select, SelectChangeEvent, TextField, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { DebounceInput } from 'react-debounce-input';
import BottomSpace from '@/components/Common/BottomSpace';
import { changetheme } from '@/components/Dashboard/PaymentAnalytics';

const bankList = [
  { id: 1, name: 'Abhyudaya Cooperative Bank Limited' },
  { id: 2, name: 'Bank Of Baroda' },
  { id: 3, name: 'Axis Bank' },
  { id: 4, name: 'Airtel Payment Bank Limited' },
  { id: 5, name: 'Ambarnath Jaihind Coop Bank Ltd Ambarnath' },
  { id: 6, name: 'Apna Sahakari Bank Ltd' },
  { id: 7, name: 'Bandhan Bank Limited' },
  { id: 8, name: 'Bank of America' },
  { id: 9, name: 'Bank of Baharain And Kuwait Bsc' },
  { id: 10, name: 'Bank of Ceylon' },
]
const stateList = [
  { id: 1, name: 'Andaman And Nicobar Island' },
  { id: 2, name: 'Andhra Pradesh' },
  { id: 3, name: 'Arunachal Pradesh' },
  { id: 4, name: 'Assam' },
  { id: 5, name: 'Bihar' },
  { id: 6, name: 'Chandigarh' },
  { id: 7, name: 'Chhattisgarh' },
  { id: 8, name: 'Dadra And Nagar Haveli' },
  { id: 9, name: 'Gujarat' },
  { id: 10, name: 'Haryana' },
]
const cityList = [
  { id: 1, name: 'Abrama' },
  { id: 2, name: 'Adval' },
  { id: 3, name: 'Ahmadabad' },
  { id: 4, name: 'Ahwa' },
  { id: 5, name: 'Anand' },
  { id: 6, name: 'Bharuch' },
  { id: 7, name: 'Cambay' },
  { id: 8, name: 'Dahej' },
  { id: 9, name: 'Dahevan' },
  { id: 10, name: 'Dakor' },
]

const branchList = [
  { id: 1, name: 'Adajan', code: 'BARBOVJADAJ' },
  { id: 2, name: 'Akoti', code: 'BARBOVJADKOT' },
  { id: 3, name: 'Ambaji Road branch', code: 'BARBOAMBAJI' },
  { id: 4, name: 'Bamorli Road', code: 'BARBOAMBAMSUR' },
  { id: 5, name: 'Bhesan, Surat, Gujarat', code: 'BARBOBHESUR' },
]

const bankWithIFSCList = [
  { id: 1, name: 'ACE Cooperative Bank LTD.', ifsc: '00120998' },
  { id: 2, name: 'SBI Bank', ifsc: '00120988' },
  { id: 3, name: 'Ronald Richards', ifsc: '00120986' },
  { id: 4, name: 'Ralph Edwards', ifsc: '00120928' },
]

function BankDetailsComp({ activeStep, _activeStep }: any) {
  const theme = createTheme()
  const router = useRouter();
  const matches = useMediaQuery('(min-width:600px)');

  const [openBank, setOpenBank] = useState(false)
  const [openIfsc, setOpenIfsc] = useState(false)
  const [accountNo, setAccountNo] = useState('')
  const [accountAccountNo, setAccountAccountNo] = useState('')
  const [acHolderName, setAcHolderName] = useState('')
  const [bankName, setBankName] = useState('')
  const [IFSC, setIFSC] = useState('')
  const [selectBank, setSelectBank] = useState('')
  const [selectState, setSelectState] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [selectBranch, setSelectBranch] = useState('')

  const handleClick = () => {
    _activeStep(activeStep + 1)
    // toast.success('Add details and amount successfully')
  }

  const _onSearch = (val: any) => { }

  const _handleBank = (val: any) => {
    setBankName(val?.name)
    setOpenBank(false)
  }

  const _handleBankIFSC = (val: any) => {
    setBankName(val?.name)
    setIFSC(val?.ifsc)
    setOpenBank(false)
  }

  const handleSelectBank = (event: SelectChangeEvent) => {
    setSelectBank(event.target.value);
    setBankName(event.target.value)
  };
  const handleSelectState = (event: SelectChangeEvent) => {

    setSelectState(event.target.value);
  };
  const handleSelectCity = (event: SelectChangeEvent) => {
    setSelectCity(event.target.value);
  };
  const handleSelectBranch = (event: SelectChangeEvent) => {

    setSelectBranch(event.target.value);
    // setBankName(val?.name)
    setIFSC(event.target.value?.code)
    setOpenIfsc(false)
  };

  return (
    <div className='min-w-full lg:min-w-[580px] mt-[30px]'>
      <Card className='sm:px-5 px-[10px]'>
        <p className='font18SB sm:!text-lg !text-base'>Enter Receiver's A/C Details</p>
        <p className='font12RB text-GRAY_101 mt-[10px]'>Add your bank information for Transfer balance</p>

        <div className="w-full my-5">
          <p className="font12RB text-white mb-[10px]">
            Bank A/c number
          </p>
          <InputField
            type="number"
            placeholder="Fill up the receiver bank account details"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>

        <div className="w-full mb-5">
          <p className="font12RB text-white  mb-[10px]">
            Confirm Bank A/c Number
          </p>
          <InputField
            type="number"
            placeholder="Fill up the receiver bank account details"
            value={acHolderName}
            onChange={(e) => setAccountAccountNo(e.target.value)}
          />
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            A/C Holder Name
          </p>
          <InputField
            placeholder="Enter Account holder name (as per bank information)"
            value={acHolderName}
            onChange={(e) => setAcHolderName(e.target.value)}
          />
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Bank Name
          </p>
          <div className='bg-BLACK_304 flex rounded-[5px]'>
            <InputField
              placeholder="Enter Bank name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <button
              onClick={() => setOpenBank(true)}
              className='font12SMB h-[48] text-BLUE_201 mr-5'>change</button>
          </div>
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white mb-[10px]">
            IFSC
          </p>
          <div className='bg-BLACK_304 flex rounded-[5px]'>
            <InputField
              placeholder="Enter IFSC"
              value={IFSC}
              onChange={(e) => setIFSC(e.target.value)}
            />
            <button
              onClick={() => setOpenIfsc(true)}
              className='font12SMB h-[48] text-BLUE_201 mr-5 whitespace-nowrap'>Find IFSC</button>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (bankName && IFSC) {
                handleClick()
              }
            }}
            className={`${bankName && IFSC ? 'bg-BLUE_201' : 'bg-GRAY_101'}  font14SB w-full mt-[25px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]`}
          >
            Transfer Now
          </button>
        </div>
      </Card>

      <Dialog
        fullWidth
        // style={{ backdropFilter: 'blur(5px)' }}
        PaperProps={{
          style: { borderRadius: 20, background: 'transparent' }
        }}
        open={openBank}
        className="w-full"
        maxWidth={'sm'}
        fullScreen={matches ? false : true}
        height={300}
        onClose={() => {
          setOpenBank(false);
        }}
      >
        <div className='bg-BLACK_301  sm:px-5 px-[10px]'>
          <div className='w-full justify-end flex'>
            <button
              onClick={() => setOpenBank(false)}
              className=' p-5'
            >
              <Icons.Close />
            </button>
          </div>
          <div className=" flex w-full items-center px-[20px] bg-Neutral200 dark:bg-Neutral200Dark rounded-[5px] bg-BLACK_304">
            <DebounceInput
              autoFocus
              // value={search}
              placeholder="Search Bank or Enter IFSC"
              // minLength={2}
              debounceTimeout={700}
              className="no-input-arrow w-full font14R h-[44px] pl-[10px] bg-BLACK_304 focus:text-white text-white focus:outline-none focus-visible:border-none rounded-[5px] placeholder-GRAY_101 "
              onChange={(e) => _onSearch(e.target.value)}
            />
            <Icons.Search w={13} h={13} />
          </div>
          <div className='sm:grid-cols-4 gap-5 overflow-x-auto grid grid-cols-3 mt-[15px]'>
            {bankList?.map((d: any, i: number) => {
              return (
                <div key={i}
                  onClick={() => _handleBank(d)}
                  className=' items-center flex flex-col py-2'>
                  <img src={'/assets/images/bank.png'} alt='profile' className='flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center' />
                  <p className='font14RB mt-[5px] text-white text-center'>
                    {d.name}
                  </p>
                </div>
              )
            })}
          </div>
          {bankWithIFSCList?.map((d, i) => {
            return (
              <div
                onClick={() => _handleBankIFSC(d)}
                className='flex px-[10px] items-center border-b border-BLACK_306 py-[16px]'>
                <img src={'/assets/images/rc.png'} alt='profile' className='flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center' />
                <div className='ml-[10px]'>
                  <p className='font14RB mt-[5px] text-white'>
                    {d?.name}
                  </p>
                  <p className='font12RB text-GRAY_101 mt-1'>
                    {d?.ifsc}
                  </p>
                </div>
              </div>
            )
          })}
          <BottomSpace className='h-5' />
        </div>
      </Dialog>

      <Dialog
        fullWidth
        // style={{ backdropFilter: 'blur(5px)' }}
        PaperProps={{
          style: { borderRadius: 20, background: 'transparent' }
        }}
        open={openIfsc}
        className="w-full"
        maxWidth={'sm'}
        fullScreen={matches ? false : true}
        height={300}
        onClose={() => {
          setOpenIfsc(false);
        }}
      >
        <div className='bg-BLACK_301 sm:px-5 px-[10px] py-5'>
          <div className='w-full justify-end flex h-[48px]'>
            <button
              onClick={() => setOpenIfsc(false)}
              className='absolute px-[10px]'
            >
              <Icons.Close />
            </button>
          </div>
          <p className='font16SB text-white'>Find IFSC</p>
          <p className='font12RB text-GRAY_101 mt-[10px]'>Select State/City and get the code</p>

          <CustomSelect value={selectBank} onChange={handleSelectBank} label={'Select Bank'} options={bankList} searchPlacrHolder={'Enter Bank Name'}
            disabled={false}
          />
          <CustomSelect value={selectState} onChange={handleSelectState} label={'Select State'} options={stateList} searchPlacrHolder={'Enter State Name'}
            disabled={selectBank ? false : true}
          />
          <CustomSelect value={selectCity} onChange={handleSelectCity} label={'Select City'} options={cityList} searchPlacrHolder={'Enter City Name'}
            disabled={selectState ? false : true}
          />
          <CustomSelect value={selectBranch} onChange={handleSelectBranch} label={'Select Branch'} options={branchList} searchPlacrHolder={'Enter Branch Name'}
            disabled={selectCity ? false : true}
          />

          <BottomSpace className='h-5' />
        </div>
      </Dialog >

    </div >
  );
}

export default BankDetailsComp;


const CustomSelect = ({ label, value, onChange, options = [], searchPlacrHolder, disabled }: any) => {
  return (
    <ThemeProvider theme={changetheme}>
      <p className={` ${disabled ? 'text-GRAY_101' : 'text-white'} font12RB mt-5 mb-[10px]`}>{label}</p>
      <Select
        disabled={disabled}
        value={value}
        onChange={onChange}
        displayEmpty
        className='w-full'
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor: colors.BLACK_301,
                color: colors.white,
                fontSize: 12,
                "&& .Mui-selected": {
                  backgroundColor: "transparent"
                },
              }
            }
          },
        }}
        IconComponent={() => <Box sx={{ px: '20px', py: 1.8 }}><Icons.DownArrow color={disabled ? colors.GRAY_101 : colors.white} /></Box>}
        sx={{
          background: colors.BLACK_304, color: colors.white, p: 0, '.MuiInputBase-input': { px: '20px', py: 1.8 },
          fontSize: 14,
          '.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            left: 0
          },
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
      >
        <div className=" flex w-full items-center px-[20px] bg-Neutral200 dark:bg-Neutral200Dark rounded-[5px] bg-BLACK_304">
          <Icons.Search w={13} h={13} />
          <DebounceInput
            autoFocus
            placeholder={searchPlacrHolder}
            debounceTimeout={700}
            className="no-input-arrow w-full font14R h-[44px] pl-[10px] bg-BLACK_304 focus:text-white text-white focus:outline-none focus-visible:border-none rounded-[5px] placeholder-GRAY_101 "
            onChange={(e) => { }}
          />
        </div>

        <MenuItem className='font14RB h-[30px] !border-BLACK_306 !py-5'
          sx={{ borderBottom: '1px solid' }}
          value=""> <em>None</em>
        </MenuItem>
        {options?.map((d) => {
          return (
            <MenuItem className='font14RB !border-BLACK_306 !py-[15px] !block'
              sx={{ borderBottom: '1px solid' }}
              value={label === 'Select Branch' ? d : d.name}>
              {d.name}
              <p className='text-GRAY_101'>
                {d.code}
              </p>
            </MenuItem>
          )
        })}
      </Select>
    </ThemeProvider>
  )

}