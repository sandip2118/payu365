import OneCardInput from "./OneCardInput"
 
function CardInputField() {
  return (
   <div className="mx-auto mt-[30px] w-[100%] sm:w-[355px] md:w-[432px] py-[30px] px-[15px] md:px-[30px] bg-BLACK_301 rounded-[10px]" >
    <>
    <p className="font16SB text-white text-start">Add new card</p>
    <div className="my-5 h-[1px] w-full bg-BLACK_301"></div>
    </>

    <div className="grid gap-5">
     <div>
     <OneCardInput label='Card number' placeholder='0000 0000 0000 0000' icon={true} iconString='/assets/icons/card.svg'/>
     </div>
      <div className="flex w-full gap-[17px] md:gap-[22px] ">
      <OneCardInput label='Expiry date' placeholder='MM/YY' icon={true} iconString='/assets/icons/calendar.svg' />
      <OneCardInput label='CVV/CVC' placeholder='•••' icon={true} iconString='/assets/icons/locked.svg' />
      </div>
      <div className="w-full">
      <OneCardInput label='Cardholder name' placeholder='Enter cardholder’s full name' icon={false}  />
      </div>
    </div>

    <div>
      save
    </div>
   </div>
  )
}

export default CardInputField