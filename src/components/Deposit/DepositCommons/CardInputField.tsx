import { useState } from "react";
import DepositButton from "./DepositButton"
import OneCardInput from "./OneCardInput"
import { useRouter } from "next/router";
import ExpiryDateInput from "./ExpiryDateInput";
import CardNumberInput from "./CardNumberInput";
 
function CardInputField() {
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    
  const checkboxStyle = {
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  border: '1px solid #44444F',
  backgroundColor: isChecked ? '#23C38E' : 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
  };
  
  
  const tickIconStyle = {
  display: isChecked ? 'block' : 'none',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
  };

  const onAddingCardDetails = () => {
    router.push('/deposit/cardOptions')
    console.log('card details added');
  }

  return (
   <div className="mx-auto mt-[30px] w-[100%] sm:w-[355px] md:w-[432px] py-[30px] px-[15px] md:px-[30px] bg-BLACK_301 rounded-[10px]" >
    <>
    <p className="font16SB text-white text-start">Add new card</p>
    <div className='mt-5 mb-7 h-[1px] w-full bg-GRAY_106'></div>
    </>

    <div className="grid gap-5">
     <div>
      <CardNumberInput />
     </div>
      <div className="flex w-full gap-[17px] md:gap-[22px] ">
      <ExpiryDateInput />
      <OneCardInput label='CVV/CVC' placeholder='•••' icon={true} iconString='/assets/icons/locked.svg' />
      </div>
      <div className="w-full">
      <OneCardInput label='Cardholder name' placeholder='Enter cardholder’s full name' icon={false}  />
      </div>
    </div>

    <div className="mt-[15px] mb-5 flex gap-2.5" onClick={handleCheckboxChange}>
        <div style={checkboxStyle} onClick={handleCheckboxChange}>
        <span style={tickIconStyle}>✓</span>
        </div>
        <p className="text-white font14R" >Save card <span className="text-GRAY_101 font10R">(optional)</span></p> 
    </div>

    <DepositButton  buttonText="Add card & continue" width="100%" onClick={onAddingCardDetails}/>
   </div>
  )
}

export default CardInputField;