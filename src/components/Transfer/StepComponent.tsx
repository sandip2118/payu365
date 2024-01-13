import { Step, StepConnector, StepLabel, Stepper, stepConnectorClasses, styled, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Icons from '@/assets/icon';
import { colors } from './../../themes';

const stepStyle = {
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05);',
  color: '#FFFFFF',
  height: '48px',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
  width: '100%',
  '& .MuiStepLabel-root ': {
    color: '#FFFFFF',
  },

  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel':
  {
    border: '0px',
    fontSize: '12px',
    fontWeight: 500,
    marginTop: '8px'
  },
  '& .MuiStepIcon-root': {
    height: '32px',
    width: '32px',
  },
}



const StepComponent = ({ activeStep, _activeStep }: any) => {
  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean, completed: boolean } }>(
    ({ theme, ownerState }: any) => (() => {
      return {
        color: '#FFFF',
        fontSize: '50px',
        fontWeight: '600',
        border: '2px solid #48546D',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
          color: '#fff',
          background: colors.GREEN_02,
          border: 'none'

        }),
        ...(ownerState.completed && {
          color: '#fff',
          background: colors.GREEN_02,
          border: '2px solid #23C38E',

        }),
      }
    }),
  );

  const Connector = styled(StepConnector)((props: any) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      left: 'calc(-50% + 10px)',
      right: 'calc(50% + 10px)',
      top: 10
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: props.color,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      border: `1px solid ${props.color}`,
    },
  }));


  // const [IsNew, setStep] = useState(steps)
  const [completed, _completed] = useState<any>([]);

  const steps = [
    { id: 1, name: 'Details & Amount' },
    { id: 2, name: 'Review' },
    { id: 3, name: 'Pay' },
  ]

  function StepIcon(props: any) {
    const { active, completed, className, icon } = props;

    return (
      <QontoStepIconRoot ownerState={{ active, completed }} className={className}>
        {completed ? (
          <Icons.CheckFill w={22} h={22} />
        ) :
          <span style={{ fontSize: '12px', color: active ? colors.white : colors.GRAY_102, fontWeight: 600 }}>{icon}</span>
        }
      </QontoStepIconRoot>
    );
  }

  useEffect(() => {
    _completed([...completed, activeStep])

  }, [activeStep])

  // const handleNext = () => {
  //   _activeStep(activeStep + 1)
  // }
  return (
    <div className='min-w-full lg:min-w-[780px]'>
      <Stepper connector={<Connector color={'#48546D'} />} activeStep={activeStep} className='stepper' alternativeLabel={true}>
        {steps.map((label: any, index: any) => {
          return (
            <Step key={label} completed={completed[index + 1]} sx={stepStyle} className='relative'>
              <StepLabel icon={index + 1} StepIconComponent={(props: any) => {
                return (

                  <div className='flex items-center justify-center'>
                    <Icons.DownArrow w={10} h={7} color={activeStep == index && colors.GREEN_02} className='absolute -top-4' />
                    <StepIcon {...props} />
                  </div>
                )
              }
              } color="inherit"
              // onClick={handleNext}
              >
                <p className={` ${(activeStep == index || completed?.includes(index)) ? 'text-GREEN_02' : 'text-GRAY_102'} font12RB`}> {label.name}</p>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}

export default StepComponent
