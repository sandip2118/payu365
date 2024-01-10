/* eslint-disable complexity */
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../../themes';
import Icons from '@/assets/icon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker } from '@mui/x-date-pickers';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


function PaymentAnalytics() {
  const router = useRouter();
  const [dateValue, setDateValue] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const data = {
    labels: ['Payment', 'Send', 'Receive', 'Deposit', 'Withdraw'],
    datasets: [
      {
        innerWidth: '5px',
        label: '# of Votes',
        data: [514, 1547, 2124, 1250, 200],
        backgroundColor: [
          '#F59D31',
          '#E54B75',
          '#FFD130',
          '#9279ED',
          '#D7D7D7',
        ],
        borderColor: [
          '#F59D31',
          '#E54B75',
          '#FFD130',
          '#9279ED',
          '#D7D7D7',
        ],
        borderWidth: 1,
      },
    ]
  }
  const chartData = useMemo(() => {
    const data12 = data?.labels?.map((d, i) => {
      return {
        label: d,
        color: data?.datasets?.[0]?.backgroundColor?.[i],
        data: data?.datasets?.[0]?.data?.[i],
      }
    })
    return data12
  }, [data.labels, data.datasets])

  const options = {
    legend: {
      display: true,
      position: "left"
    },
    elements: {
      arc: {
        borderWidth: 10
      }
    }
  };

  return (
    <div className=" bg-BLACK_301 rounded-[10px] mt-[20px] py-[17px] px-5" >
      <div className='flex justify-between items-center'>
        <p className='font20SB'>
          Payment Analytics
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name="startDate"
            value={dayjs(dateValue)}
            onClose={() => setOpen(false)}
            onChange={(newValue: any) => {
              setDateValue(newValue);
            }}
            open={open}
            format={'MMMM YYYY'}
            slotProps={{
              textField: {
                sx: {
                  background: colors.BLACK_304,
                  borderRadius: 2,
                  '& input': { color: colors.GRAY_101, fontSize: 12, fontWeight: '500', width: 100, pl: 1, cursor: 'pointer' }
                },
                size: 'small',
                onClick: () => setOpen(true),
                InputProps: {
                  startAdornment: (<Box onClick={() => setOpen(true)} sx={{ '&:hover': { cursor: 'pointer' } }}><CalendarMonthIcon sx={{ color: colors.GRAY_101, width: 13, height: 14 }} /></Box>),
                  endAdornment: (<Box onClick={() => setOpen(true)} sx={{ '&:hover': { cursor: 'pointer' } }}><ArrowDropDownIcon sx={{ color: colors.GRAY_101 }} /></Box>),
                }
              }
            }}
          />
        </LocalizationProvider>
      </div>
      <div className='flex mt-5 justify-between'>
        <div className='h-[115px]'>
          <Doughnut data={data} options={options} />
        </div>
        <div className={`grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-2 `}>
          {chartData?.map((d, i) => {
            return (
              <div key={i} className='flex gap-2 items-center'>
                <div className='w-[10px] h-[10px] rounded-full' style={{ background: d.color }} />
                <p className='font12RB text-GRAY_101'>{d.label}</p>
                <p className='font12RB'>${d.data}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}

export default PaymentAnalytics;
