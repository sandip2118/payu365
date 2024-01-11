import CardWrapper from "../SettingsCommons/CardWrapper"
import EmailVerification from "./EmailVerification"

function ManageEmail() {
  return (
   <div className="md:mx-[20px] mb-[100px]">
    <CardWrapper>
  <EmailVerification  title="Email Verification (Unverified)" description="Email verification adds another layer of security to your withdrawals and Binance account." buttonColor="grey" buttonText="Verify Email" borderColor="grey" buttonIcon='/assets/icons/exclamation.svg'/>
  </CardWrapper>

 <div className="flex gap-5 w-full items-center">
 <div className="my-5 border-[1px] border-BLACK_306 w-full"></div>
  <p className="font11RB text-GRAY_101">or</p>
  <div className="my-5 border-[1px] border-BLACK_306 w-full"></div>
 </div>

  <CardWrapper>
  <EmailVerification  title="Email Verification (Verified)" description="Email verification adds another layer of security to your withdrawals and Binance account." buttonColor="green" buttonText="Verified" borderColor="green"  lastDate="Added: April 4, 2021"/>
    </CardWrapper>
    </div>
  )
}

export default ManageEmail;